import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #ccd5ae;
  padding: 2%;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 750px){  
    font-size: 12px;
  }
`

export default function Footer(){
  return(
    <StyledFooter>
      <p>All Rights Reserved by Joey Lam <Link to="_blank">Credit</Link>&#169;</p>
    </StyledFooter>
  )
}