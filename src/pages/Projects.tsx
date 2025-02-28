import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { projectList } from "../components/static";
import {
  StyledBodyWrapper,
  StyledCentralBody,
  StyledMain,
} from "../components/Styles";

const ProjectListWrapper = styled.ul`
  list-style-type: none;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
`;

const ProjectEntryWrapper = styled.li`
  margin-top: 2vh;
  border-style: solid;
  border-radius: 8px;
  padding: 2%;
  @media screen and (max-width: 750px) {
    font-size: 10px;
  }
`;

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
      <StyledBodyWrapper>
        <Header page="Projects" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Projects</h2>
            <ProjectListWrapper>
              {projectList.map((project) => (
                <ProjectEntryWrapper>
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
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  );
}
