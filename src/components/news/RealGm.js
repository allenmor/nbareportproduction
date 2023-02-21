import $ from 'jquery';
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

function RealGm() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
        rss_url: 'https://basketball.realgm.com/rss/wiretap/0/0.xml',
      }
    }).done(function (response) {
      if (response.status !== 'ok') { throw response.message; }
      let a = response.items;
      let b = a.filter((el, i) => {
        return !el.title.toLowerCase().includes('realgm')
      });
      setNews(b);
      setIsLoading(false)
    });
}, []);


  return (
    <>
    {isLoading ? <p>Loading...</p> : 
      news.map((el, i) => {
        return <NewsCard key={i} title={el.title} date={el.pubDate} image={el.thumbnail} description={el.description}/>
      })
    }
    </>

  );
}

export default RealGm
