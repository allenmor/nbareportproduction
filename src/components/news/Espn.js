import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import NewsCard from './NewsCard';

function Espn() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
        rss_url: 'https://www.espn.com/espn/rss/nba/news',
      },
    }).done(function (response) {
      if (response.status !== 'ok') {
        throw response.message;
      }
      setNews(response.items);
      setIsLoading(false)
    });
  }, []);
  return (
      <>
    {isLoading ? <p>Loading...</p> : 
      news.map((el, i) => {
        return <NewsCard key={i} title={el.title} date={el.pubDate} image={el.enclosure.link} description={el.description}/>
      })
    }
      </>
  );
}

export default Espn;
