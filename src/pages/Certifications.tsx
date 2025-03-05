import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { certifications, skills } from "../components/static";
import {
  ProjectEntryWrapper,
  ProjectListWrapper,
  StyledBodyWrapper,
  StyledCentralBody,
  StyledMain,
} from "../components/Styles";
import Title from "../components/Title";

export default function Certifications() {
  return (
    <>
      <Title header="Certifications | Joey Resume" />
      <StyledBodyWrapper>
        <Header page="Certification" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Certification</h2>
            <ProjectListWrapper>
              {certifications.map((item) => (
                <ProjectEntryWrapper key={item.title} padding="5" marginbot="5">
                  <h3>{item.title}</h3>
                  <p>By: {item.givenBy}</p>
                </ProjectEntryWrapper>
              ))}
            </ProjectListWrapper>

            <h2>Skills</h2>
            <ProjectListWrapper>
              {skills.map((item) => (
                <ProjectEntryWrapper key={item} padding="5" marginbot="5">
                  <h3>{item}</h3>
                </ProjectEntryWrapper>
              ))}
            </ProjectListWrapper>
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  );
}
