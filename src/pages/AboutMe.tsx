import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { StyledBodyWrapper, StyledCentralBody, StyledMain } from "../components/Styles";
import Title from "../components/Title";

const StyledPhotoAndDescriptionWrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px){  
    flex-direction: column;
  }
`;

const StyledDescription = styled.p`
  margin-top: 3vh;
  margin-left: 2vw;
  @media screen and (max-width: 750px){  
    width: 100%;
  }
`
const StyledHeadshot = styled.img`
  display: block;
  width: 50%; 
`

export default function AboutMe(){
  return(
    <>
      <Title header="About Me | Joey Resume"/>
      <StyledBodyWrapper>
        <Header page="About Me"/>
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Home</h2>
            <p> Current student at Boston University</p>
            <StyledPhotoAndDescriptionWrapper>
              <StyledHeadshot
                id="headshot"
                src="./headshot.png"
                alt="Headshot of Joey Lam"
              />
              <StyledDescription>
                My name is Joey Lam, and I'm a current student at Boston
                University and a part-time consultant for The Andrew Mellon
                Foundation.
              </StyledDescription>
            </StyledPhotoAndDescriptionWrapper>
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  )
} 