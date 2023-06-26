import React from 'react'
import { useNavigate } from 'react-router-dom'
import guessLogo from '../../images/currylebrondurant.jpeg'

function Games() {
    const navigate = useNavigate()
    function handleGuessClick() {
        navigate('/guesstheplayer')
    }
  return (
    <div className='games-to-play-div'>
        <div onClick={handleGuessClick} className='eachGame-to-play-div'>
            <img alt='guess' src={guessLogo}/>
        </div>
        <div className='eachGame-to-play-div'>
            <img alt='guess' src={guessLogo}/>
        </div>
        <div className='eachGame-to-play-div'>
            <img alt='guess' src={guessLogo}/>
        </div>
        <div className='eachGame-to-play-div'>
            <img alt='guess' src={guessLogo}/>
        </div>
    </div>
  )
}

export default Games