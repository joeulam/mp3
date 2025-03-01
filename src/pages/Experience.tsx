import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { workExperience } from "../components/static";
import {
  ProjectEntryWrapper,
  ProjectListWrapper,
  StyledBodyWrapper,
  StyledCentralBody,
  StyledMain,
} from "../components/Styles";
import Title from "../components/Title";

export default function Experience() {
  return (
    <>
      <Title header="Experience | Joey Resume" />

      <StyledBodyWrapper>
        <Header page="Experience" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Job experience</h2>
            <ProjectListWrapper>
              {workExperience.map((item) => (
                <ProjectEntryWrapper key={item.date}>
                  <h3>{item.companyTitle}</h3>
                  <p>Position: {item.jobTitle}</p>
                  <p>Responsibility:</p>
                  <ul>
                    {item.responsibility.map((respon) => (
                      <li key={respon}>
                        <p>{respon}</p>
                      </li>
                    ))}
                  </ul>
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
