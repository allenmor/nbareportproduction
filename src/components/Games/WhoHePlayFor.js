import React from "react";
import { useEffect, useState } from "react";
function WhoHePlayFor() {
    const [data, setData] = useState([]);
    const [player, setPlayer] = useState({});
    
    useEffect(() => {
      if (data.length === 0) {
        fetch("https://nbaexpressbe.onrender.com/playerz")
          .then((res) => res.json())
          .then((data) => {
            const sortedArray = data.sort(
              (a, b) => b.pointsPerGame - a.pointsPerGame
            );
            const first200 = sortedArray.slice(0, 200);
            setData(first200);
          })
          .catch((error) => console.error(error));
      } else {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomElement = data[randomIndex];
        setPlayer(randomElement);
        let player = randomElement.name.split('');
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
            setPlayer(data)
          })
          .catch((error) => console.error(error));
      }
    }, [data]);
    
    
    
  return (
  <div>
    <p>Who He Play For</p>
      <img alt="player" src={player.playerImage}/>
  </div>
  )
}

export default WhoHePlayFor;
