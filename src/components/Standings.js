import React from "react";
import { useEffect, useState } from "react";
function Standings() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedRows, setClickedRows] = useState({});

  useEffect(() => {
    fetch("https://nbaexpressbe.onrender.com/standings")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false)
      });
  }, []);


  const handleRowClick = (index) => {
    setClickedRows({
      ...clickedRows,
      [index]: !clickedRows[index]
    });
  }
  return (
    <div className="standings-table-div">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>GP</th>
              <th  style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>W</th>
              <th style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)' }}>L</th>
              <th>PCT</th>
              <th>PTS +</th>
              <th>PTS -</th>
              <th>PTS+ /G</th>
              <th>PTS- /G</th>
              <th>DIFF</th>
              <th>Expected Winning PCT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stat, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: clickedRows[index]
                    ? "#FFFF00"
                    : "transparent",
                }}
                onClick={() => handleRowClick(index)}
              >
                <td style={{ color: 'blue' }}>{stat.Team}</td>
                <td>{stat.Gp}</td>
                <td style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)', color: 'white', fontWeight: 'bold' }}>{stat.Gw}</td>
                <td style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)', color: 'white', fontWeight: 'bold'  }}>{stat.GL}</td>
                <td>{(parseFloat(stat['% Victory'])/100).toFixed(3).substring(1)}</td>
                <td>{stat['Pts+']}</td>
                <td>{stat['Pts-']}</td>
                <td>{stat['Pts+ /g']}</td>
                <td>{stat['Pts- /g']}</td>
                <td>{stat.Diff}</td>
                <td>{stat['Expected Winning %']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Standings;
