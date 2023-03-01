import React from 'react'
import { useEffect, useState } from 'react';
import GamesCard from './GamesCard';

function Games() {
    const [data, setData] = useState([])
    useEffect(()=>{
    fetch('http://localhost:3000/upcoming')
    .then(res => res.json())
    .then(data => {
        setData(data)
    })
    },[])
  return (
    <div>
    {data.map((game, i) => {
      return (
        <GamesCard
          key={i}
          awayTeamName={game.awayTeamName}
          awayRecord={game.awayRecord}
          spreadAway={game.spreadAway}
          moneyLineAway={game.moneyLineAway}
          homeTeamName={game.homeTeamName}
          homeRecord={game.homeRecord}
          spreadHome={game.spreadHome}
          moneyLineHome={game.moneyLineHome}
          arena={game.arena}
          city={game.city}
          totalOver={game.totalOver}
          totalUnder={game.totalUnder}
        />
      );
    })}
  </div>
  
  )
}

export default Games