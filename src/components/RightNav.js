import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
  user-select: none;
  li {
    padding: 18px 10px;
    color: white
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


function RightNav({ open }) {

    const navigate = useNavigate('/')

    function handleHomeClick() {
        navigate('/')
    }
    function handleStandingsClick() {
        navigate('/standings')
    }

    function handleStatsClick() {
        navigate('/stats')
    }


  return React.createElement(
    Ul,
    { open: open },
    React.createElement('li', {onClick: handleHomeClick}, null, 'Home'),
    React.createElement('li', {onClick: handleStandingsClick}, null, 'Standings'),
    React.createElement('li', {onClick: handleStatsClick}, null, 'Stats'),
    React.createElement('li', {onClick: handleStandingsClick}, null, 'Games')
  );
}

export default RightNav;
