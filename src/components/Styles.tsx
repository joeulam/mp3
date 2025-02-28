import styled from "styled-components";

export const StyledBodyWrapper = styled.div`
  border-radius: 20px;
  width: 80vw;
  margin: 0 auto;
  background-color: #fefae0;

  @media screen and (max-width: 750px){  
    margin: 0;
    width: 100%;
    background-color: #fefae0;
    border-radius: 0;
  }

`;

export const StyledCentralBody = styled.div`
  display: flex;
  @media screen and (max-width: 750px){    
    display: block;
  }
`;

export const StyledMain = styled.main`
  padding: 2%;
  margin-top: 3vh;
  width: 80%;
  @media screen and (max-width: 750px){  
    margin-top: 0vh;
    width: 100%;
    min-height: 76vh;
  }
`;
