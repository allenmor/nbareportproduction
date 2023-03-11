import React, { useEffect, useState } from 'react';
import GamesCard from './GamesCard';

export default function LastGames() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch the game schedule data from the server
    fetch('https://nbaexpressbe.onrender.com/schedule')
      .then((response) => response.json())
      .then((data) => {
        setGames(data)
        setIsLoading(false)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='games-div'>
        {!isLoading ? games.map((el, i) => {
            return <GamesCard key={i} game={el}/>
        }): <p>Loading Games...</p>}
    </div>
  );
}
