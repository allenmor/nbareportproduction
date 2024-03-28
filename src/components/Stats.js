import React, { useEffect, useState } from "react";

function Stats() {
  const [data, setData] = useState([]);
  const [clickedRows, setClickedRows] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrders, setSortOrders] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/allenmor/nbareportproduction/main/stats.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleRowClick = (index) => {
    setClickedRows({
      ...clickedRows,
      [index]: !clickedRows[index],
    });
  }; 

  function handleThClick(column) {
    setData((prevData) => {
      const filteredData = prevData.filter((el) => el.G > 20);
      const newData = [...filteredData];
      const currentSortOrder = sortOrders[column] || "desc";
      const newSortOrder = currentSortOrder === "desc" ? "asc" : "desc";
      newData.sort((a, b) => {
        const sortDirection = newSortOrder === "asc" ? 1 : -1;
        if (column === "FG%") {
          const aFgPercentage = a.FG / a.FGA;
          const bFgPercentage = b.FG / b.FGA;
          return sortDirection * (aFgPercentage - bFgPercentage);
        } else if (column === "3P%") {
          const aTpPercentage = a["3P"] / a["3PA"];
          const bTpPercentage = b["3P"] / b["3PA"];
          return sortDirection * (aTpPercentage - bTpPercentage);
        } else if (column === "2P%") {
          const aTwopPercentage = a["2P"] / a["2PA"];
          const bTwopPercentage = b["2P"] / b["2PA"];
          return sortDirection * (aTwopPercentage - bTwopPercentage);
        }
        return sortDirection * (a[column] - b[column]);
      });
      setSortOrders({ ...sortOrders, [column]: newSortOrder });
      return newData;
    });
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((player) =>
    player.Player.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="standings-table-div">
      <h1 className="team-name-h1">2022-23 NBA Player Stats: Per Game</h1>
      {!isLoading ? (
        <input
          className="search-player-box"
          type="text"
          placeholder="Search for a player"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      ) : (
        ""
      )}
      <div className="table-div">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="standings-table">
            <thead>
              <tr>
                <th>Player</th> 
                <th>Pos</th>
                <th onClick={() => handleThClick("Age")}>Age</th>
                <th>Tm</th>
                <th onClick={() => handleThClick("G")}>G</th>
                <th onClick={() => handleThClick("GS")}>GS</th>
                <th onClick={() => handleThClick("MP")}>MP</th>
                <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }} onClick={() => handleThClick("PTS")}>Pts</th>
                <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }} onClick={() => handleThClick("TRB")}>TRB</th>
                <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }} onClick={() => handleThClick("AST")}>AST</th>
                <th onClick={() => handleThClick("FG")}>FG</th>
                <th onClick={() => handleThClick("FGA")}>FGA</th>
                <th onClick={() => handleThClick("FG%")}>FG%</th>
                <th onClick={() => handleThClick("3P")}>3P</th>
                <th onClick={() => handleThClick("3PA")}>3PA</th>
                <th onClick={() => handleThClick("3P%")}>3P%</th>
                <th onClick={() => handleThClick("2P")}>2P</th>
                <th onClick={() => handleThClick("2PA")}>2PA</th>
                <th onClick={() => handleThClick("2P%")}>2P%</th>
                <th onClick={() => handleThClick("FTA")}>FTA</th>
                <th onClick={() => handleThClick("FT%")}>FT%</th>
                <th onClick={() => handleThClick("ORB")}>ORB</th>
                <th onClick={() => handleThClick("DRB")}>DRB</th>
                <th onClick={() => handleThClick("STL")}>STL</th>
                <th onClick={() => handleThClick("BLK")}>BLK</th>
                <th onClick={() => handleThClick("TOV")}>TOV</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((player, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: clickedRows[index]
                      ? "#FFFF00"
                      : "transparent",
                  }}
                  onClick={() => handleRowClick(index)}
                >
                  <td
                    style={{ cursor:'pointer', color: "blue", whiteSpace: 'nowrap'}}
                  >
                    {player.Player}
                  </td>
                  <td>{player.Pos}</td>
                  <td>{player.Age}</td>
                  <td style={{ color: "blue" }}>{player.Tm}</td>
                  <td>{player.G}</td>
                  <td>{player.GS}</td>
                  <td>{player.MP}</td>
                  <td  style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)', color: 'black', fontWeight: 'bold' }}>{player.PTS}</td>
                  <td style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)', color: 'black', fontWeight: 'bold' }}>
                    {(
                      +player.DRB + +player.ORB
                    ).toFixed(1)}
                  </td>
                  <td style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)', color: 'black', fontWeight: 'bold' }}>{player.AST}</td>
                  <td>{player.FG}</td>
                  <td>{player.FGA}</td>
                  <td>{player["FG%"]}</td>
                  <td>{player["3P"]}</td>
                  <td>{player["3PA"]}</td>
                  <td>{player["3P%"]}</td>
                  <td>{player["2P"]}</td>
                  <td>{player["2PA"]}</td>
                  <td>{player["2P%"]}</td>
                  <td>{player["FTA"]}</td>
                  <td>{player["FT%"]}</td>
                  <td>{player.ORB}</td>
                  <td>{player.DRB}</td>
                  <td>{player.STL}</td>
                  <td>{player.BLK}</td>
                  <td>{player.TOV}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Stats;
