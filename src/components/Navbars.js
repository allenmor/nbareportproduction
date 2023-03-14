import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(51, 51, 51);
  display: flex;
  align-items: center;
  .logo {
    padding: 15px 0;
    color: white;
    cursor: pointer;
    user-select: none;
  }
`;

function Navbars() {
  const navigate = useNavigate();

  function handleNbaReportClick() {
    // Navigate to the home page and remove the active class from all li elements
    navigate("/");
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => li.classList.remove("active"));
  }

  return (
    <Nav>
      <div className="logo" onClick={handleNbaReportClick}>
        NBA Report
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbars;
