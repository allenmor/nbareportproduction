import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store';
import { addPlayer } from '../actions';

function LeadersCard({ stat }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  function handleNameClick(playerName) {
    let player = playerName.split('');
    let playArr = [];
    for (let i = 0; i < player.length; i++) {
      if(player[i] !== 'č' && player[i] !== 'ć') {
        playArr.push(player[i])
      } else {
        playArr.push('c')
      } 
    }
    let playerNameDone = playArr.join('')
    fetch(`https://nbaexpressbe.onrender.com/player?name=${playerNameDone}`)
      .then((res) => res.json()) 
      .then((data) => {
        store.dispatch(addPlayer(data)); // Dispatch the addPlayer action with the player data
        navigate('/stats/player')
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='leaders-card-div'>
      <h3 className='leaders-category'>{stat.categoryName}</h3>
      <div className='stats-container'>
        <div className='stats-info'>
          <p>{stat.tableData[0].col0}</p>
          <p style={{cursor: 'pointer', color:'#0074D9', fontWeight: 'bold'}} className='player-leader-name' onClick={() => handleNameClick(stat.tableData[0].playerName)}>
            {stat.tableData[0].playerName}
          </p>
          <p>{stat.tableData[0].teamName}</p>
        </div>
        <p>{stat.tableData[0].col2}</p>
      </div>
      {expanded ? '' : <p onClick={() => setExpanded(!expanded)} className='click-to-show'>Click to show #2-20 </p>}
      {expanded && stat.tableData.slice(1).map((el, i) => {
        return (
          <div key={i} className='stats-container'>
            <div className='stats-info'>
              <p>{el.col0}</p>
              <p style={{cursor: 'pointer',  color:'#0074D9', fontWeight: 'bold'}} className='player-leader-name' onClick={() => handleNameClick(el.playerName)}>
                {el.playerName}
              </p>
              <p>{el.teamName}</p>
            </div>
            <p>{el.col2}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeadersCard;
