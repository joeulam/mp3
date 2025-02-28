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
      <p>All Rights Reserved by Joey Lam <a href="_blank">Credit</a>&#169;</p>
    </StyledFooter>
  )
}