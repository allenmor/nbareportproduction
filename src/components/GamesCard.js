import React from "react";

function GamesCard({ game }) {
  return (
    <div className="card">
      <div className="team-score-divs">
        <p style={{color: 'blue', fontWeight: +game.awayScore > +game.homeScore ? 'bold': 'normal'}}>{game.awayTeamFull}</p>
        <p>{game.awayScore}</p>
      </div>
      <div className="team-score-divs">
        <p style={{color: 'blue'}}>{game.homeTeamFull}</p>
        <p>{game.homeScore}</p>
      </div>
      <table className="scores-table">
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{game.scores[0][0] + game.scores[0][1] + game.scores[0][2]}</td>
            <td>{game.scores[1][0] + game.scores[1][1]}</td>
            <td>{game.scores[2][0] + game.scores[2][1]}</td>
            <td>{game.scores[3][0] + game.scores[3][1]}</td>
            <td>{game.scores[4][0] + game.scores[4][1]}</td>
          </tr>
          <tr>
            <td>{game.scores[0][4] + game.scores[0][5] + game.scores[0][6]}</td>
            <td>{game.scores[1][2] + game.scores[1][3]}</td>
            <td>{game.scores[2][2] + game.scores[2][3]}</td>
            <td>{game.scores[3][2] + game.scores[3][3]}</td>
            <td>{game.scores[4][2] + game.scores[4][3]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GamesCard;
