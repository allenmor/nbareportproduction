import React from "react";
import { useEffect, useState } from "react";
function Picks() {
  const [spread, setSpread] = useState("");
  const [overUnder, setOverUnder] = useState("");
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/picks")
      .then((res) => res.json())
      .then((data) => {
        setOdds(data.picks);
        setOverUnder(data.expertPicks.overUnderPicks);
        setSpread(data.expertPicks.spreadPicks);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>NBA Expert Picks</h1>
      <div className="picks-pct-div">
        <p>Our Experts</p>
        <p>
          <span style={{ color: "rgb(142,145,148)" }}>Spread: </span>
          {spread.replace("- 1", "").trim()}
        </p>
        <p>
          <span style={{ color: "rgb(142,145,148)" }}>Over/Under: </span>
          {overUnder.replace("- 1", "").trim()}
        </p>
      </div>
      <div className="picks-div">
        <div className="expert-table-headers">
          <p>CURRENT ODDS</p>
          <p>EXPERT PICKS</p>
        </div>
        {odds.map((el, i) => {
          return el.homeTeam ? (
            <div key={i} className="each-pick">
              <div className="top-each-pick">
                <div className="inside-picks-div" >
                  <img alt="logo" style={{margin: '0.5rem'}} src={el.homeLogo} />
                  <p>{el.homeTeam}</p>
                <p>{el.overUnder}</p>
                </div>
                <div className="inside2-picks-div" style={{ display: "flex" , alignItems: 'center'}}>
                  <img alt="logo" style={{margin: '0.5rem'}} src={el.expertLogo} />
                  <p>{el.expertSpread}</p>
                </div>
              </div>
              <div className="top-each-pick">
                <div className="inside-picks-div">
                  <img alt="logo" style={{margin: '0.5rem'}} src={el.awayLogo} />
                  <p>{el.awayTeam}</p>
                <p>{el.spread}</p>
                </div>
                <p style={{margin: '0.5rem'}}>{el.expertOU}</p>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Picks;
