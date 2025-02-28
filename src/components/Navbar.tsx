import styled from "styled-components";
import { navBarLinks, NavInfo } from "./static";
import { Link } from 'react-router-dom';

const StyledNavBar = styled.div`
  width: 25%;
  margin-right: 1vw;
  background-color: #faedcd;
  height: 80vh;
  @media screen and (max-width: 750px){  
    margin-left: 0;
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
  }
`;
const StyledUl = styled.ul`
  justify-self: center;
  list-style-type: none;
  padding-left: 0vw;
  width: 80%;

  @media screen and (max-width: 750px){  
    list-style-type:none;
    padding-left: 0;
    display: flex;  
    justify-content: space-evenly;
    width: 100%;
  }
`;
const Styleda = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  border: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 5%;
  @media screen and (max-width: 750px){  
    width: 80%;
    font-size: calc(2vw - 2px);
  }
`;
const StyledLi = styled.li`
  margin-top: 5vh;
  @media screen and (max-width: 750px){  
    flex: 1; /* makes the buttons same sized src=w3school*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh auto;
  }
`;

export default function Navbar() {
  return (
    <StyledNavBar>
      <StyledUl>
        {navBarLinks.map((item: NavInfo) => (
          <StyledLi>
            <Styleda to={item.url}>{item.title}</Styleda>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNavBar>
  );
}
