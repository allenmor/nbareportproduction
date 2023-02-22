import React from 'react'

function LeadersCard({image, name, team, points}) {
  return (
    <div className='leaders-card-div'>
      <img className='leaders-image' alt='player' src={image} style={{maxWidth: '100%'}} />
      <div className='name-team-div' style={{marginLeft: '10px'}}>
        <p className='leaders-player-name'>{name}</p>
        <p className='leaders-team-name'>{team}</p>
      </div>
      <p className='leaders-points'>{points}</p>
    </div>
  )
}

export default LeadersCard
