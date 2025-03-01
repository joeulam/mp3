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
  StyledH2,
  StyledMain,
} from "../components/Styles";
import { useState } from "react";
import {
  addition,
  division,
  multiplication,
  powerFunction,
  ResponseData,
  subtraction,
  useProcessFunctionData,
} from "../components/calculatorFunction";
import Title from "../components/Title";

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

const CalculatorWrapper = styled.div`
  margin: 5vh auto;
  background-color: beige;
  height: 70vh;
  width: 30vw;
  border-style: solid;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 100%;
    border-style: none;
  }
`;

const StyledButtonGroup = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  width: 20vw;
  @media screen and (max-width: 750px) {
    width: 40vw;
  }
`;

const StyledButton = styled.button`
  flex: 1;
  border-radius: 10px;
  margin: 5%;
  padding: 5%;
  background-color: rgb(254, 249, 235);
`;
const StyledInputName = styled.h6`
  margin-top: 5vh;
`;

const StyledInputs = styled.input`
  border-radius: 10px;
  padding: 5%;
  height: 3vh;
`;

const StyledResult = styled.h3<{ color?: string }>`
  margin-top: 5vh;
  border-style: solid;
  padding: 10% 20%;
  border-radius: 10px;
  width: 80%;
  height: 15%;
  overflow-wrap: break-word;
  background-color: #f8f8f2;
  color: ${(color) => color.color};
`;

export default function Projects() {
  const { color, result, processFunctionData } = useProcessFunctionData();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

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
            <CalculatorWrapper>
              <StyledH2 fontSize="24" margintop="8">
                Calculator
              </StyledH2>
              <StyledResult color={color}>{result}</StyledResult>
              <StyledInputName>First input</StyledInputName>
              <StyledInputs
                type="number"
                value={value1 == 0 ? "" : value1}
                onChange={(value) => setValue1(Number(value.target.value))}
              ></StyledInputs>
              <StyledInputName>Second input</StyledInputName>
              <StyledInputs
                type="number"
                value={value2 == 0 ? "" : value2}
                onChange={(value) => setValue2(Number(value.target.value))}
              ></StyledInputs>
              <StyledButtonGroup>
                <StyledButton
                  onClick={() => processFunctionData(addition(value1, value2))}
                >
                  +
                </StyledButton>
                <StyledButton
                  onClick={() =>
                    processFunctionData(subtraction(value1, value2))
                  }
                >
                  -
                </StyledButton>
                <StyledButton
                  onClick={() =>
                    processFunctionData(multiplication(value1, value2))
                  }
                >
                  *
                </StyledButton>
                <StyledButton
                  onClick={() => processFunctionData(division(value1, value2))}
                >
                  /
                </StyledButton>
                <StyledButton
                  onClick={() =>
                    processFunctionData(powerFunction(value1, value2))
                  }
                >
                  **
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    processFunctionData({
                      total: 0,
                      isPos: "",
                    } as ResponseData);
                    setValue1(0);
                    setValue2(0);
                  }}
                >
                  Clear
                </StyledButton>
              </StyledButtonGroup>
            </CalculatorWrapper>
          </StyledMain>
        </StyledCentralBody>
        <Footer />
      </StyledBodyWrapper>
    </>
  );
}
