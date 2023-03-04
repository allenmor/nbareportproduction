import React from 'react'

// Mapping of team names to their abbreviations
const teamAbbreviations = {
  "Atlanta Hawks": "ATL",
  "Boston Celtics": "BOS",
  "Brooklyn Nets": "BKN",
  "Charlotte Hornets": "CHA",
  "Chicago Bulls": "CHI",
  "Cleveland Cavaliers": "CLE",
  "Dallas Mavericks": "DAL",
  "Denver Nuggets": "DEN",
  "Detroit Pistons": "DET",
  "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU",
  "Indiana Pacers": "IND",
  "LA Clippers": "LAC",
  "Los Angeles Lakers": "LAL",
  "Memphis Grizzlies": "MEM",
  "Miami Heat": "MIA",
  "Milwaukee Bucks": "MIL",
  "Minnesota Timberwolves": "MIN",
  "New Orleans Pelicans": "NOP",
  "New York Knicks": "NYK",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "Philadelphia 76ers": "PHI",
  "Phoenix Suns": "PHX",
  "Portland Trail Blazers": "POR",
  "Sacramento Kings": "SAC",
  "San Antonio Spurs": "SAS",
  "Toronto Raptors": "TOR",
  "Utah Jazz": "UTA",
  "Washington Wizards": "WAS",
}

function LeadersCard({image, name, team, points, number}) {
  // Look up the abbreviation for the team name
  const teamAbbreviation = teamAbbreviations[team]

  return (
    <div className='leaders-card-div'>
      <p>{number}</p>
      <img className='leaders-image' alt='player' src={image} style={{maxWidth: '100%'}} />
      <div className='name-team-div' style={{marginLeft: '10px'}}>
        <p className='leaders-player-name'>{name}</p>
        <p className='leaders-team-name'>{teamAbbreviation}</p>
      </div>
      <p className='leaders-points'>{points}</p>
    </div>
  )
}

export default LeadersCard
