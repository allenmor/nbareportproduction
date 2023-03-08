import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Player() {
  const player = useSelector((state) => state.player);
  const navigate = useNavigate();
  useEffect(() => {
    if (!player) {
      navigate("/stats");
    }
  }, [navigate, player]);
  return (
    <>
      {player && (
        <div className="player-div">
          <img src={player.playerImage} alt="player" />
          <p>
            <b>{player.playerName}</b>
          </p>
          <p className="player-positon">
            <b>Position: </b>
            {player.positions+' handed'}
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
                      <td style={{color: 'blue'}}>{el.age.length > 2 ? '' :el.team}</td>
                      <td>
                        {el.league.includes("Did Not") ? "DNP" : el.league}
                      </td>
                      <td>{el.position}</td>
                      <td>{el.games}</td>
                      <td>{el.gamesStarted}</td>
                      <td>{el.minutesPlayed}</td>
                      <td style={{color: 'blue'}}>{el.points}</td>
                      <td style={{color: 'blue'}}>{el.totalRebounds}</td>
                      <td style={{color: 'blue'}}>{el.assists}</td>
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
