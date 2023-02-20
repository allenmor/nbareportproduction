import $ from 'jquery';
import { useEffect, useState } from 'react';

function RealGm() {
  const [news, setNews] = useState([]);

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
    });
  }, []);

  return (
    <div>
      <h1>RealGM</h1>
    </div>
  );
}

export default RealGm
