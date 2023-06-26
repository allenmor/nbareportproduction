import React from "react";
import { useEffect, useState } from "react";
import LeadersCard from "./LeadersCard";
function Leaders() {
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/allenmor/nbareportproduction/main/leaders.json')
    .then(res => res.json())
    .then(data => {
      setData(data.results)
      setIsLoading(false)
    })
    .catch(error => console.error(error))
  },[])
  
  return (
    <>
      <h1 className="team-name-h1">NBA Stat Leaders 2022-23</h1>
      <div className="leaders-div">
      {isLoading ? <p>Loading Leaders...</p> : data.map((el, i) => {
        return <LeadersCard key={i} stat={el}/>
      })}
      </div>
    </>
  );
}

export default Leaders;
