import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addPlayer } from '../actions';
import store from '../store';


function BoxscoreTable({data}) {
    const navigate = useNavigate()
    function handleNameClick(playerName) {
        let player = playerName.split("");
        let playArr = [];
        for (let i = 0; i < player.length; i++) {
          if(player[i] !== "č" && player[i] !== "ć") {
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
    <tr>
    <td onClick={() => handleNameClick(data.player)} style={{whiteSpace: 'nowrap', color:'blue', cursor: 'pointer'}}>{data.player}</td>
   {data.mp ?
       <>
   <td>{data.mp}</td>
    <td>{data.fg}</td>
    <td>{data.fga}</td>
    <td>{data.fg_pct}</td>
    <td>{data.fg3}</td>
    <td>{data.fg3a}</td>
    <td>{data.fg3_pct}</td>
    <td>{data.ft}</td>
    <td>{data.fta}</td>
    <td>{data.ft_pct}</td>
    <td>{data.orb}</td>
    <td>{data.drb}</td>
    <td>{data.trb}</td>
    <td>{data.ast}</td>
    <td>{data.stl}</td>
    <td>{data.blk}</td>
    <td>{data.tov}</td>
    <td>{data.pf}</td>
    <td>{data.pts}</td>
    <td>{data.plus_minus}</td>
   </> 
    : <td>Out</td>}
  </tr>
  )
}

export default BoxscoreTable