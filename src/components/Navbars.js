
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

  const navigate = useNavigate()

  function handleNbaReportClick() {
    navigate('/')
  }
  return React.createElement(
    Nav,
    null,
    React.createElement("div", { className: "logo", onClick: handleNbaReportClick }, "NBA Report"),
    React.createElement(Burger, null)
  );
}

export default Navbars;
