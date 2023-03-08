import React, { useState } from 'react';

function LeadersCard({ stat }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='leaders-card-div' onClick={() => setExpanded(!expanded)}>
      <h3>{stat.categoryName}</h3>
      <div className='stats-container' >
      <div className='stats-info'>
        <p>{stat.tableData[0].col0}</p>
        <p>{stat.tableData[0].playerName}</p>
        <p>{stat.tableData[0].teamName}</p>
      </div>
        <p>{stat.tableData[0].col2}</p>
      </div>
      {expanded && stat.tableData.slice(1).map((el, i) => {
        return (
      <div className='stats-container' >

          <div key={i} className='stats-info'>
            <p>{el.col0}</p>
            <p>{el.playerName}</p>
            <p>{el.teamName}</p>
          </div>
            <p>{el.col2}</p>
          </div>
        )
      })}
    </div>
  )
}

export default LeadersCard
