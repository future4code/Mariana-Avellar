import React from "react";
import styled from "styled-components";
import { goToHomePage } from "../Routes/Coordinator";
import {useHistory} from "react-router-dom"

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  font-size: 18px;
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

const NavButton = styled.button`
  width: 20%;
  height: 40px;
  font-size: 16px;
  margin-left: 20px;
  background-color: purple;
  color: white;
  text-decoration: none;
  border-radius: 40px;
`;

const Navigation = () => {
  const history = useHistory()

  return  (
    <NavContainer>
        LabeX
            <NavButton onClick={() => goToHomePage(history)}>Página inicial</NavButton>
    </NavContainer>
    )
};

export default Navigation;
