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


function RightNav({ open, onClose }) {
  const navigate = useNavigate();

  function handleLinkClick(path) {
    // Navigate to the path and close the navbar
    navigate(path);
    onClose();
  }

  function handleHomeClick() {
    handleLinkClick('/');
  }

  function handleStandingsClick() {
    handleLinkClick('/standings');
  }

  function handleStatsClick() {
    handleLinkClick('/stats');
  }

  function handleLeadersClick() {
    handleLinkClick('/leaders');
  }

  return (
    <Ul open={open} onClick={onClose}>
      <li onClick={handleHomeClick}>Home</li>
      <li onClick={handleStandingsClick}>Standings</li>
      <li onClick={handleStatsClick}>Stats</li>
      <li onClick={handleLeadersClick}>Leaders</li>
    </Ul>
  );
}

export default RightNav;
