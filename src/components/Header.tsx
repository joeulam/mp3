import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #e9edc9;
  border-radius: 10px;
  padding: 1%;
  height: 15vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
  
  @media screen and (max-width: 750px){  
    align-items: center;
    justify-content: center;
  }
`

export default function Header({page}: {page: string}){
  return(
    <StyledHeader>
        <h1>Joey Lam</h1>
        <p>Joey's {page}</p>
    </StyledHeader>
  )
}