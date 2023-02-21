import React, { useEffect, useState } from 'react';

function Stats() {
  const [data, setData] = useState([]);
  const [clickedRows, setClickedRows] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, []);

  const handleRowClick = (index) => {
    setClickedRows({
      ...clickedRows,
      [index]: !clickedRows[index]
    });
  }

  return (
    <div className='standings-table-div'>
     {isLoading ? <p>Loading...</p> : <table className='standings-table'>
        <thead>
          <tr>
            <th>Player</th>
            <th>Name</th>
            <th>Pts</th>
            <th>Pos</th>
            <th>Age</th>
            <th>Tm</th>
            <th>G</th>
            <th>GS</th>
            <th>MP</th>
            <th>FG</th>
            <th>FGA</th>
            <th>FG%</th>
            <th>3P</th>
            <th>3PA</th>
            <th>3P%</th>
            <th>2P</th>
            <th>2PA</th>
            <th>2P%</th>
            <th>eFG%</th>
            <th>FT</th>
            <th>FTA</th>
            <th>FT%</th>
            <th>ORB</th>
            <th>DRB</th>
            <th>TRB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TOV</th>
            <th>PF</th>
          </tr>
        </thead>
        <tbody>
          { data.map((player, index) => (
            <tr
              key={index}
              style={{backgroundColor: clickedRows[index] ? '#FFFF00' : 'transparent'}}
              onClick={() => handleRowClick(index)}
            >
              <td>{player.Player}</td>
              <td>{player.Rk}</td>
              <td>{player.PF}</td>
              <td>{player.Pos}</td>
              <td>{player.Age}</td>
              <td>{player.Tm}</td>
              <td>{player.G}</td>
              <td>{player.GS}</td>
              <td>{player.MP}</td>
              <td>{player.FG}</td>
              <td>{player.FGA}</td>
              <td>{player['FG%']}</td>
              <td>{player['3P']}</td>
              <td>{player['3PA']}</td>
              <td>{player['3P%']}</td>
              <td>{player['2P']}</td>
              <td>{player['2PA']}</td>
              <td>{player['2P%']}</td>
              <td>{player['eFG%']}</td>
              <td>{player.FT}</td>
              <td>{player.FTA}</td>
              <td>{player['FT%']}</td>
              <td>{player.ORB}</td>
              <td>{player.DRB}</td>
              <td>{player.TRB}</td>
              <td>{player.AST}</td>
              <td>{player.STL}</td>
              <td>{player.BLK}</td>
              <td>{player.TOV}</td>
              <td>{player.PF}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default Stats;
