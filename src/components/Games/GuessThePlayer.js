import React, { useEffect, useState } from "react";

function GuessThePlayer() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null); // New state variable

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/allenmor/nbareportproduction/main/all-players.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].players);
        let filteredPlayers = data.data[0].players.filter(
          (player) => player.name && player.name.trim() !== ""
        );
        console.log(filteredPlayers);
        setPlayers(filteredPlayers);
      })
      .catch((error) => console.error(error));
  }, []);

  const startGame = () => {
    const randomIndexPlayer = Math.floor(Math.random() * players.length);
    const randomIndexOptionA = Math.floor(Math.random() * players.length);
    const randomIndexOptionB = Math.floor(Math.random() * players.length);
    const randomIndexOptionC = Math.floor(Math.random() * players.length);
    setSelectedPlayer(players[randomIndexPlayer]);
    let a = players[randomIndexOptionA];
    let b = players[randomIndexOptionB];
    let c = players[randomIndexOptionC];
    setChoices([a.name, b.name, c.name, players[randomIndexPlayer].name]);
    console.log(a, b, c);
  };
  console.log(choices);


  function handleChoiceClick(name){
    setSelectedChoice(name); // Set the current choice when a choice is clicked

    if(name === selectedPlayer.name) {
        console.log('yes');
    } else {
        console.log('no');
    }
  }
  return (
    <div className="guess-player-div">
      {!selectedPlayer && (
        <button className="start-game-button" onClick={startGame}>
          Start Game
        </button>
      )}
      {selectedPlayer && (
          <div className="selectedPlayerDiv">
            <img src={selectedPlayer.imgURL} alt="player" />
          <div className="choices-div">
            {choices.map((el, i) => {
              return <p 
              key={i} 
              onClick={() => handleChoiceClick(el)} 
              className={`each-choice ${selectedChoice === el ? (el === selectedPlayer.name ? 'correct-choice' : 'wrong-choice') : ''}`}
              >
                  {el}
              </p>
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GuessThePlayer;
