import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BoxscoreTable from "./BoxscoreTable";

export default function Boxscore() {
  const location = useLocation();
  const data = location.state.data;

  let url = data.link.link;
  const [boxscore, setBoxscore] = useState([]);
  const [home, setHome] = useState([]);
  const [away, setAway] = useState([]);
  useEffect(() => {
    fetch(`https://nbaexpressbe.onrender.com/boxscores?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        setBoxscore(data);
        let theGame = data;
        let fullGame = []
        let homeFull = [];
        let awayFull = [];
        for (let i = 0; i < theGame.length; i++) {
            const player = theGame[i].player;
        
            if (!fullGame.some((p) => p.player === player)) {
              fullGame.push(theGame[i]);
            }
        }
        for (let i = 0; i < fullGame.length; i++) {
          const player = fullGame[i];

          if (player.player === "Team Totals") {
            // If the current player object is the 'Team Totals' object,
            // push all remaining objects to the home array (except for the 'Team Totals' object itself)
            homeFull.push(...fullGame.slice(i + 1));
            break;
          } else {
            // Otherwise, push the player object to the away array
            awayFull.push(player);
          }
        }
        setHome(homeFull);
        setAway(awayFull);
      })
      .catch((error) => console.error(error));
  }, [url]);


  let fullGame = [];
  let homeFull = [];
  let awayFull = [];
  let firstQuarter = [];
  let homeFirst = [];
  let awayFirst = [];
  let secondQuarter = [];
  let homeSecond = [];
  let awaySecond = [];
  let firstHalf = [];
  let homeHalf = [];
  let awayHalf = [];
  let thirdQuarter = [];
  let homeThird = [];
  let awayThird = [];
  let fourthQuarter = [];
  let homeFourth = [];
  let awayFourth = [];
  let secondHalf = [];
  let homeSecondHalf = [];
  let awaySecondHalf = [];

  for (let i = 0; i < boxscore.length; i++) {
    const player = boxscore[i].player;

    if (!fullGame.some((p) => p.player === player)) {
      fullGame.push(boxscore[i]);
    } else if (!firstQuarter.some((p) => p.player === player)) {
      firstQuarter.push(boxscore[i]);
    } else if (!secondQuarter.some((p) => p.player === player)) {
      secondQuarter.push(boxscore[i]);
    } else if (!firstHalf.some((p) => p.player === player)) {
      firstHalf.push(boxscore[i]);
    } else if (!thirdQuarter.some((p) => p.player === player)) {
      thirdQuarter.push(boxscore[i]);
    } else if (!fourthQuarter.some((p) => p.player === player)) {
      fourthQuarter.push(boxscore[i]);
    } else if (!secondHalf.some((p) => p.player === player)) {
      secondHalf.push(boxscore[i]);
    }
  }

  for (let i = 0; i < fullGame.length; i++) {
    const player = fullGame[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeFull.push(...fullGame.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awayFull.push(player);
    }
  }

  for (let i = 0; i < firstQuarter.length; i++) {
    const player = firstQuarter[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeFirst.push(...firstQuarter.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awayFirst.push(player);
    }
  }

  for (let i = 0; i < secondQuarter.length; i++) {
    const player = secondQuarter[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeSecond.push(...secondQuarter.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awaySecond.push(player);
    }
  }

  for (let i = 0; i < firstHalf.length; i++) {
    const player = firstHalf[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeHalf.push(...firstHalf.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awayHalf.push(player);
    }
  }

  for (let i = 0; i < thirdQuarter.length; i++) {
    const player = thirdQuarter[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeThird.push(...thirdQuarter.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awayThird.push(player);
    }
  }

  for (let i = 0; i < fourthQuarter.length; i++) {
    const player = fourthQuarter[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeFourth.push(...fourthQuarter.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awayFourth.push(player);
    }
  }

  for (let i = 0; i < secondHalf.length; i++) {
    const player = secondHalf[i];

    if (player.player === "Team Totals") {
      // If the current player object is the 'Team Totals' object,
      // push all remaining objects to the home array (except for the 'Team Totals' object itself)
      homeSecondHalf.push(...secondHalf.slice(i + 1));
      break;
    } else {
      // Otherwise, push the player object to the away array
      awaySecondHalf.push(player);
    }
  }

  function sortArray(array) {
    return array.sort((a, b) => parseInt(b.mp) - parseInt(a.mp));
  }

  function handleButtonClick(button) {
    switch (button) {
      case "game":
        setHome(sortArray(homeFull));
        setAway(sortArray(awayFull));
        break;
      case "q1":
        setHome(sortArray(homeFirst));
        setAway(sortArray(awayFirst));
        break;
      case "q2":
        setHome(sortArray(homeSecond));
        setAway(sortArray(awaySecond));
        break;
      case "h1":
        setHome(sortArray(homeHalf));
        setAway(sortArray(awayHalf));
        break;
      case "q3":
        setHome(sortArray(homeThird));
        setAway(sortArray(awayThird));
        break;
      case "q4":
        setHome(sortArray(homeFourth));
        setAway(sortArray(awayFourth));
        break;
      case "h2":
        setHome(sortArray(homeSecondHalf));
        setAway(sortArray(awaySecondHalf));
        break;
      default:
        break;
    }
  }
  
  const teamNames = {
    "ATL": "Atlanta Hawks",
    "BRK": "Brooklyn Nets",
    "BOS": "Boston Celtics",
    "CHO": "Charlotte Hornets",
    "CHI": "Chicago Bulls",
    "CLE": "Cleveland Cavaliers",
    "DAL": "Dallas Mavericks",
    "DEN": "Denver Nuggets",
    "DET": "Detroit Pistons",
    "GSW": "Golden State Warriors",
    "HOU": "Houston Rockets",
    "IND": "Indiana Pacers",
    "LAC": "Los Angeles Clippers",
    "LAL": "Los Angeles Lakers",
    "MEM": "Memphis Grizzlies",
    "MIA": "Miami Heat",
    "MIL": "Milwaukee Bucks",
    "MIN": "Minnesota Timberwolves",
    "NOP": "New Orleans Pelicans",
    "NYK": "New York Knicks",
    "OKC": "Oklahoma City Thunder",
    "ORL": "Orlando Magic",
    "PHI": "Philadelphia 76ers",
    "PHX": "Phoenix Suns",
    "POR": "Portland Trail Blazers",
    "SAC": "Sacramento Kings",
    "SAS": "San Antonio Spurs",
    "TOR": "Toronto Raptors",
    "UTA": "Utah Jazz",
    "WAS": "Washington Wizards"
  };
//   console.log(data.link.scores[0][4] + data.link.scores[0][5] + data.link.scores[0][6]);
//   console.log(data.link.scores[0][0] + data.link.scores[0][1] + data.link.scores[0][2]);
  return (
    <div>
      <div className="quarter-btn-div">
        <button onClick={() => handleButtonClick("game")}>Game</button>
        <button onClick={() => handleButtonClick("q1")}>Q1</button>
        <button onClick={() => handleButtonClick("q2")}>Q2</button>
        <button onClick={() => handleButtonClick("q3")}>Q3</button>
        <button onClick={() => handleButtonClick("q4")}>Q4</button>
      </div>
      <div className="boxscore-divs">
      <h1>{teamNames[data.link.scores[0].substring(4)]}</h1>
        <table className="boxscore-tables">
          <thead>
            <tr>
              <th>Player</th>
              <th>MP</th>
              <th>FG</th>
              <th>FGA</th>
              <th>FG%</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>PTS</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>REB</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>AST</th>
              <th>3P</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>FT</th>
              <th>FTA</th>
              <th>FT%</th>
              <th>ORB</th>
              <th>DRB</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TOV</th>
              <th>PF</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {home.map((el, i) => {
              return <BoxscoreTable data={el} key={i} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="boxscore-divs">
      <h1>{teamNames[data.link.scores[0].substring(0, 3)]}</h1>
        <table className="boxscore-tables">
          <thead>
            <tr>
              <th>Player</th>
              <th>MP</th>
              <th>FG</th>
              <th>FGA</th>
              <th>FG%</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>PTS</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>REB</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>AST</th>
              <th>3P</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>FT</th>
              <th>FTA</th>
              <th>FT%</th>
              <th>ORB</th>
              <th>DRB</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TOV</th>
              <th>PF</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {away.map((el, i) => {
              return <BoxscoreTable data={el} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
