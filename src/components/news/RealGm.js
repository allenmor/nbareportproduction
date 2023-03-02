import $ from 'jquery';
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { useDispatch } from 'react-redux';
import { addData } from '../../actions';


function RealGm() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch(); 

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
      dispatch(addData(b));
    });
    
}, [dispatch]);


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

export default RealGm;
