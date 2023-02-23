import React from "react";
import { useEffect, useState } from "react";
import LeadersCard from "./LeadersCard";
function Leaders() {
  const [points, setPoints] = useState([]);
  const [rebounds, setRebounds] = useState([])
  const [assists, setAssists] = useState([])
  const [threes, setThrees] = useState([])
  const [steals, setSteals] = useState([])
  const [blocks, setBlocks] = useState([])
  const [efficiency, setEfficiency] = useState([])
  const [pointsLoading, setPointsLoading] = useState(true);
  const [reboundsLoading, setReboundsLoading] = useState(true);
  const [assistsLoading, setAssistsLoading] = useState(true);
  const [threesLoading, setThreesLoading] = useState(true);
  const [stealsLoading, setStealsLoading] = useState(true);
  const [blocksLoading, setBlocksLoading] = useState(true);
  const [efficiencyLoading, setEfficiencyLoading] = useState(true);

  useEffect(()=>{
  fetch('https://nbaexpressbe.onrender.com/leaderstats')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setPoints(data.points);
    setPointsLoading(false);
    setRebounds(data.rebounds);
    setReboundsLoading(false);
    setAssists(data.assists);
    setAssistsLoading(false);
    setThrees(data.threes);
    setThreesLoading(false);
    setSteals(data.steals);
    setStealsLoading(false);
    setBlocks(data.blocks);
    setBlocksLoading(false);
    setEfficiency(data.efficiency);
    setEfficiencyLoading(false);
  })
  },[])
  return (
    <>
      <h1 className='team-name-h1'>NBA 2022-2023 LEADERS</h1>
    <div className="leaders-div">
      <div className="leaders-each-container">
        <h1 className="leader-h1">Points per game</h1>
        {pointsLoading ? (
          <p>Loading...</p>
        ) : (
          points.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Rebounds per game</h1>
        {reboundsLoading ? (
          <p>Loading...</p>
        ) : (
          rebounds.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Assists per game</h1>
        {assistsLoading ? (
          <p>Loading...</p>
        ) : (
          assists.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">3-pointers made per game</h1>
        {threesLoading ? (
          <p>Loading...</p>
        ) : (
          threes.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Steals per game</h1>
        {stealsLoading ? (
          <p>Loading...</p>
        ) : (
          steals.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Blocks per game</h1>
        {blocksLoading ? (
          <p>Loading...</p>
        ) : (
          blocks.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Efficiency per game</h1>
        {efficiencyLoading ? (
          <p>Loading...</p>
        ) : (
          efficiency.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
            />
          ))
        )}
      </div>
    </div>
    </>
  );
  
}

export default Leaders;
