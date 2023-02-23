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

  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/points")
      .then((res) => res.json())
      .then((data) => {
        setPoints(data);
        setPointsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/rebounds")
      .then((res) => res.json())
      .then((data) => {
        setRebounds(data);
        setReboundsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/assists")
      .then((res) => res.json())
      .then((data) => {
        setAssists(data);
        setAssistsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/threes")
      .then((res) => res.json())
      .then((data) => {
        setThrees(data);
        setThreesLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/steals")
      .then((res) => res.json())
      .then((data) => {
        setSteals(data);
        setStealsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/blocks")
      .then((res) => res.json())
      .then((data) => {
        setBlocks(data);
        setBlocksLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/efficiency")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEfficiency(data);
        setEfficiencyLoading(false);
      });
  }, []);
  return (
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
  );
  
}

export default Leaders;
