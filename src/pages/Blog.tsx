import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { StyledBodyWrapper, StyledCentralBody, StyledMain } from "../components/Styles";

export default function Blog(){
  return(
    <>
    <StyledBodyWrapper>
        <Header page="Blog" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Home</h2>
            <p> Current student at Boston University</p>
            
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  )
}