import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Lineups() {
  const location = useLocation();
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { teamSelect } = location.state;
  useEffect(() => {
    let url = "";

    switch (teamSelect) {
      case "Boston Celtics":
        url = "https://nbaexpressbe.onrender.com/celtics";
        break;
      case "Brooklyn Nets":
        url = "https://nbaexpressbe.onrender.com/nets";
        break;
      case "New York Knicks":
        url = "https://nbaexpressbe.onrender.com/knicks";
        break;
      case "Philadelphia 76ers":
        url = "https://nbaexpressbe.onrender.com/76ers";
        break;
      case "Toronto Raptors":
        url = "https://nbaexpressbe.onrender.com/raptors";
        break;
      case "Chicago Bulls":
        url = "https://nbaexpressbe.onrender.com/bulls";
        break;
      case "Cleveland Cavaliers":
        url = "https://nbaexpressbe.onrender.com/cavaliers";
        break;
      case "Detroit Pistons":
        url = "https://nbaexpressbe.onrender.com/pistons";
        break;
      case "Indiana Pacers":
        url = "https://nbaexpressbe.onrender.com/pacers";
        break;
      case "Milwaukee Bucks":
        url = "https://nbaexpressbe.onrender.com/bucks";
        break;
      case "Denver Nuggets":
        url = "https://nbaexpressbe.onrender.com/nuggets";
        break;
      case "Minnesota Timberwolves":
        url = "https://nbaexpressbe.onrender.com/timberwolves";
        break;
      case "Oklahoma City Thunder":
        url = "https://nbaexpressbe.onrender.com/thunder";
        break;
      case "Portland Trail Blazers":
        url = "https://nbaexpressbe.onrender.com/blazers";
        break;
      case "Utah Jazz":
        url = "https://nbaexpressbe.onrender.com/jazz";
        break;
      case "Golden State Warriors":
        url = "https://nbaexpressbe.onrender.com/warriors";
        break;
      case "LA Clippers":
        url = "https://nbaexpressbe.onrender.com/clippers";
        break;
      case "Los Angeles Lakers":
        url = "https://nbaexpressbe.onrender.com/lakers";
        break;
      case "Phoenix Suns":
        url = "https://nbaexpressbe.onrender.com/suns";
        break;
      case "Sacramento Kings":
        url = "https://nbaexpressbe.onrender.com/kings";
        break;
      case "Atlanta Hawks":
        url = "https://nbaexpressbe.onrender.com/hawks";
        break;
      case "Charlotte Hornets":
        url = "https://nbaexpressbe.onrender.com/hornets";
        break;
      case "Miami Heat":
        url = "https://nbaexpressbe.onrender.com/heat";
        break;
      case "Orlando Magic":
        url = "https://nbaexpressbe.onrender.com/magic";
        break;
      case "Washington Wizards":
        url = "https://nbaexpressbe.onrender.com/wizards";
        break;
      case "Dallas Mavericks":
        url = "https://nbaexpressbe.onrender.com/mavericks";
        break;
      case "Houston Rockets":
        url = "https://nbaexpressbe.onrender.com/rockets";
        break;
      case "Memphis Grizzlies":
        url = "https://nbaexpressbe.onrender.com/grizzlies";
        break;
      case "New Orleans Pelicans":
        url = "https://nbaexpressbe.onrender.com/pelicans";
        break;
      case "San Antonio Spurs":
        url = "https://nbaexpressbe.onrender.com/spurs";
        break;
      default:
        url = "https://nbaexpressbe.onrender.com/lakers";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="standings-table-div">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="standings-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Age</th>
              <th>Height</th>
              <th style={{ backgroundColor: "blue" }}>Pts</th>
              <th style={{ backgroundColor: "blue" }}>Reb</th>
              <th style={{ backgroundColor: "blue" }}>Ast</th>
              <th>GP</th>
              <th>MIN</th>
              <th>FG%</th>
              <th>3P%</th>
              <th>2P%</th>
              <th>FT%</th>
              <th>Stl</th>
              <th>Blk</th>
              <th>To</th>
              <th>Fo</th>
              <th>Eff</th>
            </tr>
          </thead>
          <tbody>
            {team.map((stats, i) => {
              return (
                <tr key={i}>
                  <td style={{ color: "blue" }}>{stats.Player}</td>
                  <td>{stats.Age}</td>
                  <td>{stats.Height}</td>
                  <td style={{ backgroundColor: "rgba(0, 0, 255, 0.2)" }}>
                    {stats.Pts}
                  </td>
                  <td style={{ backgroundColor: "rgba(0, 0, 255, 0.2)" }}>
                    {stats.Reb}
                  </td>
                  <td style={{ backgroundColor: "rgba(0, 0, 255, 0.2)" }}>
                    {stats.Ast}
                  </td>
                  <td>{stats.GP}</td>
                  <td>{stats.MIN}</td>
                  <td>{stats["FG%"]}</td>
                  <td>{stats["3P%"]}</td>
                  <td>{stats["2P%"]}</td>
                  <td>{stats["FT%"]}</td>
                  <td>{stats.Stl}</td>
                  <td>{stats.Blk}</td>
                  <td>{stats.To}</td>
                  <td>{stats.Fo}</td>
                  <td>{stats.Eff}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Lineups;
