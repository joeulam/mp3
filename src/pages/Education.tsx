import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { education, leadership } from "../components/static";
import { ProjectEntryWrapper, ProjectListWrapper, StyledBodyWrapper, StyledCentralBody, StyledMain } from "../components/Styles";

export default function Education(){
  return(
    <>
    <StyledBodyWrapper>
        <Header page="Education" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Educational History</h2>
            <ProjectListWrapper>
              {
                education.map((item) => (
                  <ProjectEntryWrapper key={item.school} padding="5" marginbot="3">
                    <h3>{item.school}</h3>
                    <p>{item.major}</p>
                  </ProjectEntryWrapper>
                ))
              }
            </ProjectListWrapper>
            <h2>Leadership and Activities</h2>
            <ProjectListWrapper>
              {
                leadership.map((item) => (
                  <ProjectEntryWrapper key={item.title} padding="5">
                    <h3>{item.title}</h3>
                    <p>{item.position}</p>
                  </ProjectEntryWrapper>
                ))
              }
            </ProjectListWrapper>
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  )
}