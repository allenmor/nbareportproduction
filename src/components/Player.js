import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import emptyperson from '../images/emptyplayer.jpeg'

function Player() {
  const player = useSelector((state) => state.player);
  const [borderColor, setBorderColor] = useState("rgb(51,51,51)");

  const navigate = useNavigate();
  const nbaColors = useMemo(() => [
    { team: "ATL", color: "#E03A3E" },
    { team: "BOS", color: "#008348" },
    { team: "BKN", color: "#000000" },
    { team: "CHA", color: "#1D1160" },
    { team: "CHI", color: "#CE1141" },
    { team: "CLE", color: "#860038" },
    { team: "DAL", color: "#00538C" },
    { team: "DEN", color: "#0E2240" },
    { team: "DET", color: "#C8102E" },
    { team: "GSW", color: "#1D428A" },
    { team: "HOU", color: "#CE1141" },
    { team: "IND", color: "#002D62" },
    { team: "LAC", color: "#C8102E" },
    { team: "LAL", color: "#552583" },
    { team: "MEM", color: "#5D76A9" },
    { team: "MIA", color: "#98002E" },
    { team: "MIL", color: "#00471B" },
    { team: "MIN", color: "#0C2340" },
    { team: "NOP", color: "#0C2340" },
    { team: "NYK", color: "#F58426" },
    { team: "OKC", color: "#007AC1" },
    { team: "ORL", color: "#0077C0" },
    { team: "PHI", color: "#ED174C" },
    { team: "PHX", color: "#1D1160" },
    { team: "POR", color: "#E03A3E" },
    { team: "SAC", color: "#5A2D81" },
    { team: "SAS", color: "#C4CED4" },
    { team: "TOR", color: "#CE1141" },
    { team: "UTA", color: "#002B5C" },
    { team: "WAS", color: "#002B5C" },
  ], []);
  

  useEffect(() => {
    if (player !== null) {
      const colorObj = nbaColors.find((el) => el.team === player.gameLog[0].team);
      if (colorObj) {
        setBorderColor(colorObj.color);
      }
    }
  }, [player, nbaColors]);
  


  useEffect(() => {
    if (!player) {
      navigate("/stats");
    }
  }, [navigate, player]);
  return (
    <>
      {player && (
          <div className="player-div">
          <img 
          className="player-actual-image"
            style={{ border: `5px solid ${borderColor}` }}
            src={player.playerImage ? player.playerImage: emptyperson}
            alt="player"
          />
          <p>
            <b>{player.playerName}</b>
          </p>
          <p className="player-positon">
            <b>Position: </b>
            {player.positions + " handed"}
          </p>
          <p>
            {" "}
            <b>Height/Weight: </b>
            {player.heightWeight}
          </p>
          <div className="player-career-table-div">
            <table className="player-table">
              <thead>
                <tr className="table-headers-player">
                  <th>Season</th>
                  <th>Age</th>
                  <th>Team</th>
                  <th>League</th>
                  <th>Pos</th>
                  <th>G</th>
                  <th>GS</th>
                  <th>MP</th>
                  <th>PTS</th>
                  <th>TRB</th>
                  <th>AST</th>
                  <th>FG</th>
                  <th>FGA</th>
                  <th>FG%</th>
                  <th>3PA</th>
                  <th>3P%</th>
                  <th>3P</th>
                  <th>2PA</th>
                  <th>2P%</th>
                  <th>2P</th>
                  <th>eFG%</th>
                  <th>FTA</th>
                  <th>FT%</th>
                  <th>FT</th>
                  <th>ORB</th>
                  <th>DRB</th>
                  <th>STL</th>
                  <th>BLK</th>
                  <th>TOV</th>
                  <th>PF</th>
                </tr>
              </thead>

              <tbody>
                {player.gameLog.reverse().map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el.age.length > 2 ? el.age : el.season}</td>
                      <td>{el.age.length > 2 ? el.team : el.age}</td>
                      <td style={{ color: "blue" }}>
                        {el.age.length > 2 ? "" : el.team}
                      </td>
                      <td>
                        {el.league.includes("Did Not") ? "DNP" : el.league}
                      </td>
                      <td>{el.position}</td>
                      <td>{el.games}</td>
                      <td>{el.gamesStarted}</td>
                      <td>{el.minutesPlayed}</td>
                      <td style={{ color: "blue" }}>{el.points}</td>
                      <td style={{ color: "blue" }}>{el.totalRebounds}</td>
                      <td style={{ color: "blue" }}>{el.assists}</td>
                      <td>{el.fieldGoals}</td>
                      <td>{el.fieldGoalAttempts}</td>
                      <td>{el.fieldGoalPercentage}</td>
                      <td>{el.threePointAttempts}</td>
                      <td>{el.threePointPercentage}</td>
                      <td>{el.threePointers}</td>
                      <td>{el.twoPointAttempts}</td>
                      <td>{el.twoPointPercentage}</td>
                      <td>{el.twoPointers}</td>
                      <td>{el.effectiveFieldGoalPercentage}</td>
                      <td>{el.freeThrowAttempts}</td>
                      <td>{el.freeThrowPercentage}</td>
                      <td>{el.freeThrows}</td>
                      <td>{el.offensiveRebounds}</td>
                      <td>{el.defensiveRebounds}</td>
                      <td>{el.steals}</td>
                      <td>{el.blocks}</td>
                      <td>{el.turnovers}</td>
                      <td>{el.personalFouls}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Player;
