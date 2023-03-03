import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { useDispatch } from 'react-redux';
import { addData } from '../../actions';
import $ from 'jquery';

function Cbs() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
        rss_url: 'https://www.cbssports.com/rss/headlines/nba/',
      },
    }).done(function (response) {
      if (response.status !== 'ok') {
        throw response.message;
      }
      const items = response.items;

    setNews(items)
      setIsLoading(false);
      console.log(items);
      dispatch(addData(items));
    });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        news.map((el, i) => {
          return (
            <NewsCard
              key={i}
              title={el.title}
              date={el.pubDate}
              image={el.enclosure.link}
              description={el.description}
            />
          );
        })
      )}
    </>
  );
}

export default Cbs;
