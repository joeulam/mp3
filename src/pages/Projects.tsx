import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { projectList } from "../components/static";
import {
  ProjectEntryWrapper,
  ProjectListWrapper,
  StyledBodyWrapper,
  StyledCentralBody,
  StyledMain,
} from "../components/Styles";

import Title from "../components/Title";
import Calculator from "../components/Calculator";

const StyledMultiButton = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledButtons = styled.a`
  display: inline-block;
  border-style: solid;
  padding: 2%;
  border-radius: 20px;
  margin-top: 5%;
  text-decoration: none;
  color: black;
  margin-right: 1vw;
`;

export default function Projects() {
  return (
    <>
      <Title header="Projects | Joey Resume" />

      <StyledBodyWrapper>
        <Header page="Projects" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Projects</h2>
            <ProjectListWrapper>
              {projectList.map((project) => (
                <ProjectEntryWrapper key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.techStack}</p>
                  <StyledMultiButton>
                    {project.webUrl != "" ? (
                      <StyledButtons href={project.webUrl} target="_blank">
                        Check it out the website
                      </StyledButtons>
                    ) : null}
                    <StyledButtons href={project.githubUrl} target="_blank">
                      Check it out on github
                    </StyledButtons>
                  </StyledMultiButton>
                </ProjectEntryWrapper>
              ))}
            </ProjectListWrapper>
            <Calculator/>
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  );
}
