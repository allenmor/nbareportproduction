import React from "react";
import { useEffect, useState } from "react";
import LeadersCard from "./LeadersCard";
function Leaders() {
  const [points, setPoints] = useState([]);
  const [rebounds, setRebounds] = useState([]);
  const [assists, setAssists] = useState([]);
  const [threes, setThrees] = useState([]);
  const [steals, setSteals] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [efficiency, setEfficiency] = useState([]);
  const [pointsLoading, setPointsLoading] = useState(true);
  const [reboundsLoading, setReboundsLoading] = useState(true);
  const [assistsLoading, setAssistsLoading] = useState(true);
  const [threesLoading, setThreesLoading] = useState(true);
  const [stealsLoading, setStealsLoading] = useState(true);
  const [blocksLoading, setBlocksLoading] = useState(true);
  const [efficiencyLoading, setEfficiencyLoading] = useState(true);
  const [pointsTwo, setPointsTwo] = useState([]);
  const [reboundsTwo, setReboundsTwo] = useState([]);
  const [assistsTwo, setAssistsTwo] = useState([]);
  const [threesTwo, setThreesTwo] = useState([]);
  const [stealsTwo, setStealsTwo] = useState([]);
  const [blocksTwo, setBlocksTwo] = useState([]);
  const [efficiencyTwo, setEfficiencyTwo] = useState([]);
  const [pointsLoadingTwo, setPointsLoadingTwo] = useState(true);
  const [reboundsLoadingTwo, setReboundsLoadingTwo] = useState(true);
  const [assistsLoadingTwo, setAssistsLoadingTwo] = useState(true);
  const [threesLoadingTwo, setThreesLoadingTwo] = useState(true);
  const [stealsLoadingTwo, setStealsLoadingTwo] = useState(true);
  const [blocksLoadingTwo, setBlocksLoadingTwo] = useState(true);
  const [efficiencyLoadingTwo, setEfficiencyLoadingTwo] = useState(true);

  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/leaderstats")
      .then((res) => res.json())
      .then((data) => {
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
      });
    fetch("http://localhost:3000/statleader")
      .then((res) => res.json())
      .then((data) => {
        setPointsTwo(data.points);
        setPointsLoadingTwo(false);
        setReboundsTwo(data.rebounds);
        setReboundsLoadingTwo(false);
        setAssistsTwo(data.assists);
        setAssistsLoadingTwo(false);
        setThreesTwo(data.threes);
        setThreesLoadingTwo(false);
        setStealsTwo(data.steals);
        setStealsLoadingTwo(false);
        setBlocksTwo(data.blocks);
        setBlocksLoadingTwo(false);
        setEfficiencyTwo(data.efficiency);
        setEfficiencyLoadingTwo(false);
      });
  }, []);
  console.log(pointsTwo);
  return (
    <>
      <h1 className="team-name-h1">NBA Stat Leaders 2022-23</h1>
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
                number={i + 1}
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
                number={i + 1}
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
                number={i + 1}
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
                number={i + 1}
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
                number={i + 1}
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
                number={i + 1}
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
                number={i + 1}
              />
            ))
          )}
        </div>
      </div>
      <h1 className="team-name-h1">Top single game performances</h1>
      <div className="leaders-div">
      <div className="leaders-each-container">
        <h1 className="leader-h1">Points in a game</h1>
        {pointsLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          pointsTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Rebounds in a game</h1>
        {reboundsLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          reboundsTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Assists in a game</h1>
        {assistsLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          assistsTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">3-pointers in a game</h1>
        {threesLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          threesTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Steals in a game</h1>
        {stealsLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          stealsTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Blocks in a game</h1>
        {blocksLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          blocksTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      <div className="leaders-each-container">
        <h1 className="leader-h1">Efficiency in a game</h1>
        {efficiencyLoadingTwo ? (
          <p>Loading...</p>
        ) : (
          efficiencyTwo.map((el, i) => (
            <LeadersCard
              key={i}
              image={el.img}
              name={el.name}
              team={el.team}
              points={el.points}
              number={i + 1}
            />
          ))
        )}
      </div>
      </div>
    </>
  );
}

export default Leaders;
