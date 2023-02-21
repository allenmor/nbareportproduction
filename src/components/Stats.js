import React, { useEffect, useState } from 'react';

function Stats() {
  const [data, setData] = useState([]);
  const [clickedRows, setClickedRows] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [sortOrders, setSortOrders] = useState([])

  useEffect(() => {
    fetch('https://nbaexpressbe.onrender.com/')
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

  function handleThClick(column) {
    setData(prevData => {
      const filteredData = prevData.filter(el => el.G > 20); // Filter out objects where G is less than 20
      // Create a new copy of the data array to avoid mutating the original state
      const newData = [...filteredData];
      const currentSortOrder = sortOrders[column] || 'desc'; // Get the current sort order for this column
      const newSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc'; // Toggle the sort order
      newData.sort((a, b) => {
        // Sort by the column in the current sort order
        const sortDirection = newSortOrder === 'asc' ? 1 : -1;
        return sortDirection * (a[column] - b[column]);
      });
      setSortOrders({ ...sortOrders, [column]: newSortOrder }); // Update the sort order for this column
      return newData;
    });
  }
  
  
  return (
    <div className='standings-table-div'>
     {isLoading ? <p>Loading...</p> : <table className='standings-table'>
        <thead>
          <tr>
            <th>Player</th>
            <th>Pos</th>
            <th onClick={() => handleThClick('Age')}>Age</th>
            <th>Tm</th>
            <th onClick={() => handleThClick('G')}>G</th>
            <th onClick={() => handleThClick('GS')}>GS</th>
            <th onClick={() => handleThClick('MP')}>MP</th>
            <th onClick={() => handleThClick('PTS')}>Pts</th>
            <th onClick={() => handleThClick('FG')}>FG</th>
            <th onClick={() => handleThClick('FGA')}>FGA</th>
            <th onClick={() => handleThClick('FG%')}>FG%</th>
            <th onClick={() => handleThClick('3P')}>3P</th>
            <th onClick={() => handleThClick('3PA')}>3PA</th>
            <th onClick={() => handleThClick('3P%')}>3P%</th>
            <th onClick={() => handleThClick('2P')}>2P</th>
            <th onClick={() => handleThClick('2PA')}>2PA</th>
            <th onClick={() => handleThClick('2P%')}>2P%</th>
            <th onClick={() => handleThClick('FTA')}>FTA</th>
            <th onClick={() => handleThClick('FT%')}>FT%</th>
            <th onClick={() => handleThClick('ORB')}>ORB</th>
            <th onClick={() => handleThClick('DRB')}>DRB</th>
            <th onClick={() => handleThClick('TRB')}>TRB</th>
            <th onClick={() => handleThClick('AST')}>AST</th>
            <th onClick={() => handleThClick('STL')}>STL</th>
            <th onClick={() => handleThClick('BLK')}>BLK</th>
            <th onClick={() => handleThClick('TOV')}>TOV</th>
          </tr>
        </thead>
        <tbody>
          { data.map((player, index) => (
            <tr
              key={index}
              style={{backgroundColor: clickedRows[index] ? '#FFFF00' : 'transparent'}}
              onClick={() => handleRowClick(index)}
            >
              <td style={{ color: 'blue' }}>{player.Player}</td>
              <td>{player.Pos}</td>
              <td>{player.Age}</td>
              <td style={{ color: 'blue' }}>{player.Tm}</td>
              <td>{player.G}</td>
              <td>{player.GS}</td>
              <td>{player.MP}</td>
              <td style={{ color: 'blue' }}>{player.PTS}</td>
              <td>{player.FG}</td>
              <td>{player.FGA}</td>
              <td>{player['FG%']}</td>
              <td>{player['3P']}</td>
              <td>{player['3PA']}</td>
              <td>{player['3P%']}</td>
              <td>{player['2P']}</td>
              <td>{player['2PA']}</td>
              <td>{player['2P%']}</td>
              <td>{player['FTA']}</td>
              <td>{player['FT%']}</td>
              <td>{player.ORB}</td>
              <td>{player.DRB}</td>
              <td>{player.TRB}</td>
              <td>{player.AST}</td>
              <td>{player.STL}</td>
              <td>{player.BLK}</td>
              <td>{player.TOV}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default Stats;
