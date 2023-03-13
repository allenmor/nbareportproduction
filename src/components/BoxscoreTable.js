import React from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../actions";
import store from "../store";

function BoxscoreTable({ data }) {
  const navigate = useNavigate();
  function handleNameClick(playerName) {
    let player = playerName.split("");
    let playArr = [];
    for (let i = 0; i < player.length; i++) {
      if (player[i] !== "č" && player[i] !== "ć") {
        playArr.push(player[i]);
      } else {
        playArr.push("c");
      }
    }
    let playerNameDone = playArr.join("");
    fetch(`https://nbaexpressbe.onrender.com/player?name=${playerNameDone}`)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(addPlayer(data)); // Dispatch the addPlayer action with the player data
        navigate("/stats/player");
      })
      .catch((error) => console.error(error));
  }

  return (
    <tr>
      <td
        onClick={() => handleNameClick(data.player)}
        style={{ whiteSpace: "nowrap", color: "blue", cursor: "pointer" }}
      >
        {data.player}
      </td>
      {data.mp ? (
        <>
          <td>{data.mp || "0"}</td>
          <td>{data.fg || "0"}</td>
          <td>{data.fga || "0"}</td>
          <td>{data.fg_pct || "0"}</td>
          <td>{data.fg3 || "0"}</td>
          <td>{data.fg3a || "0"}</td>
          <td>{data.fg3_pct || "0"}</td>
          <td>{data.ft || "0"}</td>
          <td>{data.fta || "0"}</td>
          <td>{data.ft_pct || "0"}</td>
          <td>{data.orb || "0"}</td>
          <td>{data.drb || "0"}</td>
          <td>{data.trb || "0"}</td>
          <td>{data.ast || "0"}</td>
          <td>{data.stl || "0"}</td>
          <td>{data.blk || "0"}</td>
          <td>{data.tov || "0"}</td>
          <td>{data.pf || "0"}</td>
          <td>{data.pts || "0"}</td>
          <td>{data.plus_minus || "0"}</td>
        </>
      ) : (
        <td>Out</td>
      )}
    </tr>
  );
}

export default BoxscoreTable;
