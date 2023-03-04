import React, { useState } from "react";

function NewsCard({ title, date, image, description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const formattedDescription = description.replace(/(<([^>]+)>)/gi, "");
  const shortenedDescription = formattedDescription.substring(0, 90);

  if(!image) {
    image = 'https://assets.turbologo.com/blog/en/2019/10/19084930/NBA-logo-illustration.jpg'
  }
  // make the date look better
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Date(date).toLocaleString("en-US", options);

  const handleReadMore = () => {
    setShowFullDescription(true);

  };

  const handleReadLess = () => {
    setShowFullDescription(false);
  };

  return (
    <div className="eachNews-card">
      <img alt="newsImg" className="newsImg" src={image ? image : ''} />
      <div style={showFullDescription ? {overflowY: 'scroll'} : {}} className="news-info-div">
        <h1 className="eachNews-h1">{title}</h1>
        <p className="newsDate">{formattedDate}</p>
        <p className="description">
          {showFullDescription ? formattedDescription : shortenedDescription}
          {formattedDescription.length > 100 &&
            (showFullDescription ? (
              <button className="read-btn" onClick={handleReadLess}>Read less</button>
            ) : (
              <button className="read-btn" onClick={handleReadMore}>Read more</button>
            ))}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
