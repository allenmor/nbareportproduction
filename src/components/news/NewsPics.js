import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from "react-redux";

function NewsPics() {
  const data = useSelector((state) => state.data);
  const [newsPics, setNewsPics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageArray = useMemo(() => {
    return newsPics.map((el) => {
      if (el.thumbnail) {
        return el.thumbnail;
      } else if (el.enclosure.thumbnail) {
        return el.enclosure.thumbnail;
      } else if (el.enclosure.link) {
        return el.enclosure.link;
      } else {
        return 'https://www.logodesignlove.com/images/classic/nba-logo.jpg';
      }
    });
  }, [newsPics]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [imageArray]);

  useEffect(() => {
    setNewsPics(data);
    setCurrentIndex(0);
  }, [data]);

  return (
    <div className='news-pics-container' >
      {imageArray.sort(() => Math.random() - 0.5).length > 0 && (
        <img src={imageArray[currentIndex]} alt={`pic`} />
      )}
    </div>
  );
}

export default NewsPics;
