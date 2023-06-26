import React from "react";
import Espn from "./Espn";
import NewsPics from "./NewsPics";
import RealGm from "./RealGm";
import Cbs from "./Cbs";
import LastGames from "../LastGames";
// import { useDispatch } from 'react-redux';
// import { useEffect } from "react";
// import { addStats } from "../../actions";
function NewsContainer() {

//   const dispatch = useDispatch();
//   useEffect(()=>{
//   fetch('https://nbaexpressbe.onrender.com/playerz')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     dispatch(addStats(data))
//   })
//   .catch(error => console.error(error))
// },[])
return (
    <>
      <div className="newsheader-pic">
        {/* <LastGames /> */}
        <h1 className="current-news">Latest NBA News</h1>
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
