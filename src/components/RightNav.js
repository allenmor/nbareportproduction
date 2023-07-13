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
    color:white;
  }
  li.active {
    background-color: white;
    color: black;
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

function RightNav({ open, onClose }) {
  const navigate = useNavigate();

  function handleLinkClick(path, event) {
    // Navigate to the path and close the navbar
    navigate(path);
    onClose();

    // Add the active class to the clicked li element
    const lis = event.currentTarget.parentNode.querySelectorAll('li');
    lis.forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  function handleHomeClick(event) {
    handleLinkClick('/', event);
  }

  function handleStandingsClick(event) {
    handleLinkClick('/standings', event);
  }

  function handleStatsClick(event) {
    handleLinkClick('/stats', event);
  }

  function handleLeadersClick(event) {
    handleLinkClick('/leaders', event);
  }

  // function handlePicksClick(event) {
  //   handleLinkClick('/picks', event);
  // }

  function handleGamesClick(event) {
    handleLinkClick('/games', event)
  }
  function handleChatClick(event) {
    handleLinkClick('/chat', event)
  }
  return (
    <Ul open={open} onClick={onClose}>
      <li onClick={handleHomeClick}>Home</li>
      <li onClick={handleStandingsClick}>Standings</li>
      <li onClick={handleStatsClick}>Stats</li>
      <li onClick={handleLeadersClick}>Leaders</li>
      {/* <li onClick={handlePicksClick}>Picks</li> */}
      <li onClick={handleGamesClick}>Games</li>
      <li onClick={handleChatClick}>Chat</li>
    </Ul>
  );
}

export default RightNav;
