import React from "react";
import Espn from "./Espn";
import NewsPics from "./NewsPics";
import RealGm from "./RealGm";
import Cbs from "./Cbs";
import LastGames from "../LastGames";

function NewsContainer() {
  return (
    <>
      <div className="newsheader-pic">
        <LastGames />
        <h1 className="current-news">Latest News</h1>
        <NewsPics />
        <div className="news-container">
          <RealGm />
          <Espn />
          <Cbs />
        </div>
      </div>
    </>
  );
}

export default NewsContainer;
