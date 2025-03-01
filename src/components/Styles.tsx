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

export const StyledH2 = styled.h2<{fontSize?:string, margintop?:string}>`
  font-size: ${(fontSize) => (fontSize.fontSize == undefined ? "10" : fontSize.fontSize)}px;
  margin-top: ${(margintop) => (margintop.margintop == undefined ? "0" : margintop.margintop)}%;
  `;


export const ProjectListWrapper = styled.ul`
  list-style-type: none;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
`;

export const ProjectEntryWrapper = styled.li<{padding?:string, marginbot?:string}>`
  margin-top: 2vh;
  margin-bottom: ${(marginBot)=>(marginBot.marginbot == undefined ? "0": marginBot.marginbot)}vh;
  border-style: solid;
  border-radius: 8px;
  padding: ${(padding) => (padding.padding == undefined ? "2": padding.padding)}%;
  @media screen and (max-width: 750px) {
    font-size: 10px;
  }
`;