import React from "react";
import { useEffect, useState } from "react";
import LeadersCard from "./LeadersCard";
function Leaders() {
  
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://nbaexpressbe.onrender.com/points-leaders')
    .then(res => res.json())
    .then(data => {
      setData(data.results)
      console.log(data.results);
    })
    .catch(error => console.error(error))
  },[])
  
  return (
    <>
      <h1 className="team-name-h1">NBA Stat Leaders 2022-23</h1>
      <div className="leaders-div">
      {data.map((el, i) => {
        return <LeadersCard stat={el}/>
      })}
      </div>
    </>
  );
}

export default Leaders;
