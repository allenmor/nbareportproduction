import React from "react";
import Espn from "./Espn";
import RealGm from "./RealGm";
function NewsContainer() {
  
  return (
    <>
      <h1 className="current-news">Current News</h1>
      <div className="news-container">
        <RealGm />
        <Espn />
      </div>
    </>
  );
}

export default NewsContainer;
