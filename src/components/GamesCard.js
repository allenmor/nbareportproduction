import React from 'react';

function GamesCard({ awayTeamName, awayRecord, spreadAway, moneyLineAway, homeTeamName, homeRecord, spreadHome, moneyLineHome, arena, city, totalOver, totalUnder }) {
  return (
    <div className="game-card">
      <div className="team-info">
        <div className="team-name">{awayTeamName}</div>
        <div className="team-record">{awayRecord}</div>
        <div className="spread">{spreadAway}</div>
        <div className="money-line">{moneyLineAway}</div>
      </div>
      <div className="team-info">
        <div className="team-name">{homeTeamName}</div>
        <div className="team-record">{homeRecord}</div>
        <div className="spread">{spreadHome}</div>
        <div className="money-line">{moneyLineHome}</div>
      </div>
      <div className="venue-info">
        <div className="arena">{arena}</div>
        <div className="city">{city}</div>
      </div>
      <div className="total-info">
        <div className="total-over">{totalOver}</div>
        <div className="total-under">{totalUnder}</div>
      </div>
    </div>
  );
}

export default GamesCard;
