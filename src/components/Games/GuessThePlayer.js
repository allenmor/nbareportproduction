import React, { useEffect, useState } from "react";

function GuessThePlayer() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null); // New state variable
  const [points, setPoints] = useState(0);
  const [loadingNewPlayer, setLoadingNewPlayer] = useState(false); // New state variable
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

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

    let options = [a.name, b.name, c.name, players[randomIndexPlayer].name];

    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = options[i];
      options[i] = options[j];
      options[j] = temp;
    }

    setChoices(options);
  };

  function handleChoiceClick(name) {
    if (loadingNewPlayer) {
      return; // Ignore clicks while loading a new player
    }

    setSelectedChoice(name);

    if (name === selectedPlayer.name) {
      setPoints((prev) => prev + 1);
      setCorrect((prev) => prev + 1);
    } else {
      setPoints((prev) => prev - 1);
      setWrong((prev) => prev + 1);
    }

    setLoadingNewPlayer(true);
    setTimeout(() => {
      startGame();
      setSelectedChoice(null);
      setLoadingNewPlayer(false);
    }, 600);
  }
  return (
    <div className="guess-player-div">
      <div className="guess-numbers-div">
        <p>Correct Guess: {correct}</p>
        <p>Points {points}</p>
        <p>Wrong Guess {wrong}</p>
      </div>
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
              return (
                <p
                  key={i}
                  onClick={() => handleChoiceClick(el)}
                  className={`each-choice ${
                    selectedChoice === el
                      ? el === selectedPlayer.name
                        ? "correct-choice"
                        : "wrong-choice"
                      : ""
                  }`}
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GuessThePlayer;
