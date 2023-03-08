import React, { useEffect, useState } from 'react';

function Stats() {
  const [data, setData] = useState([]);
  const [clickedRows, setClickedRows] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [sortOrders, setSortOrders] = useState({})

  useEffect(() => {
    fetch('https://nbaexpressbe.onrender.com/playerz')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
      .catch(error => console.error(error))
  }, []);

  const handleRowClick = (index) => {
    setClickedRows({
      ...clickedRows,
      [index]: !clickedRows[index]
    });
  }

  function handleThClick(column) {
    setData(prevData => {
      const filteredData = prevData.filter(el => el.gamesPlayed > 20); // Filter out objects where gamesPlayed is less than 20
      // Create a new copy of the data array to avoid mutating the original state
      const newData = [...filteredData];
      const currentSortOrder = sortOrders[column] || 'desc'; // Get the current sort order for this column
      const newSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc'; // Toggle the sort order
      newData.sort((a, b) => {
        // Sort by the column in the current sort order
        const sortDirection = newSortOrder === 'asc' ? 1 : -1;
        if (column === 'FG%') {
          const aFgPercentage = a['fieldGoalsMade'] / a['fieldGoalsAttempted'];
          const bFgPercentage = b['fieldGoalsMade'] / b['fieldGoalsAttempted'];
          return sortDirection * (aFgPercentage - bFgPercentage);
        } else if (column === '3P%') {
          const aTpPercentage = a['threePointersMade'] / a['threePointersAttempted'];
          const bTpPercentage = b['threePointersMade'] / b['threePointersAttempted'];
          return sortDirection * (aTpPercentage - bTpPercentage);
        } else if (column === '2P%') {
          const aTwopPercentage = a['twoPointersMade'] / a['twoPointersAttempted'];
          const bTwopPercentage = b['twoPointersMade'] / b['twoPointersAttempted'];
          return sortDirection * (aTwopPercentage - bTwopPercentage);
        }
        return sortDirection * (a[column] - b[column]);
      });
      setSortOrders({ ...sortOrders, [column]: newSortOrder }); // Update the sort order for this column
      return newData;
    });
  }
  return (
    <div className='standings-table-div'>
      <h1 className='team-name-h1'>2022-23 NBA Player Stats: Per Game</h1>
     {isLoading ? <p>Loading...</p> : 
     <table className='standings-table'>
        <thead>
          <tr>
            <th>Player</th>
            <th>Pos</th>
            <th onClick={() => handleThClick('age')}>Age</th>
            <th>Tm</th>
            <th onClick={() => handleThClick('gamesPlayed')}>G</th>
            <th onClick={() => handleThClick('gamesStarted')}>GS</th>
            <th onClick={() => handleThClick('minutesPerGame')}>MP</th>
            <th onClick={() => handleThClick('pointsPerGame')}>Pts</th>
            <th onClick={() => handleThClick('fieldGoalsMade')}>FG</th>
            <th onClick={() => handleThClick('fieldGoalsAttempted')}>FGA</th>
            <th onClick={() => handleThClick('fieldGoalPercentage')}>FG%</th>
            <th onClick={() => handleThClick('threePointersMade')}>3P</th>
            <th onClick={() => handleThClick('threePointersAttempted')}>3PA</th>
            <th onClick={() => handleThClick('threePointPercentage')}>3P%</th>
            <th onClick={() => handleThClick('twoPointersMade')}>2P</th>
            <th onClick={() => handleThClick('twoPointersAttempted')}>2PA</th>
            <th onClick={() => handleThClick('twoPointPercentage')}>2P%</th>
            <th onClick={() => handleThClick('freeThrowsAttempted')}>FTA</th>
            <th onClick={() => handleThClick('freeThrowPercentage')}>FT%</th>
            <th onClick={() => handleThClick('offensiveRebounds')}>ORB</th>
            <th onClick={() => handleThClick('defensiveRebounds')}>DRB</th>
            <th onClick={() => handleThClick('totalRebounds')}>TRB</th>
            <th onClick={() => handleThClick('assists')}>AST</th>
            <th onClick={() => handleThClick('steals')}>STL</th>
            <th onClick={() => handleThClick('blocks')}>BLK</th>
            <th onClick={() => handleThClick('turnovers')}>TOV</th>
          </tr>
        </thead>
        <tbody>
          { data.map((player, index) => (
            <tr
              key={index}
              style={{backgroundColor: clickedRows[index] ? '#FFFF00' : 'transparent'}}
              onClick={() => handleRowClick(index)}
            >
              <td style={{ color: 'blue' }}>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
              <td style={{ color: 'blue' }}>{player.team}</td>
              <td>{player.gamesPlayed}</td>
              <td>{player.gamesStarted}</td>
              <td>{player.minutesPerGame}</td>
              <td style={{ color: 'blue' }}>{player.pointsPerGame}</td>
              <td>{player.fieldGoalsMade}</td>
              <td>{player.fieldGoalsAttempted}</td>
              <td>{player['freeThrowPercentage']}</td>
              <td>{player['threePointersMade']}</td>
              <td>{player['threePointersAttempted']}</td>
              <td>{player['threePointPercentage']}</td>
              <td>{player['twoPointersMade']}</td>
              <td>{player['twoPointersAttempted']}</td>
              <td>{player['twoPointPercentage']}</td>
              <td>{player['freeThrowsAttempted']}</td>
              <td>{player['freeThrowPercentage']}</td>
              <td>{player.offensiveRebounds}</td>
              <td>{player.defensiveRebounds}</td>
              <td>{(+player.defensiveRebounds + +player.offensiveRebounds).toFixed(1)}</td>
              <td>{player.assists}</td>
              <td>{player.steals}</td>
              <td>{player.blocks}</td>
              <td>{player.turnovers}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default Stats;
