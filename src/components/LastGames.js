import React, { useEffect, useState } from 'react';
import GamesCard from './GamesCard';

export default function LastGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the game schedule data from the server
    fetch('https://nbaexpressbe.onrender.com/schedule')
      .then((response) => response.json())
      .then((data) => {
        setGames(data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='games-div'>
        {games.map((el, i) => {
            return <GamesCard key={i} game={el}/>
        })}
    </div>
  );
}
