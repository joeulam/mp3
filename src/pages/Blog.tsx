import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { blogPost } from "../components/static";
import {
  ProjectEntryWrapper,
  ProjectListWrapper,
  StyledBodyWrapper,
  StyledCentralBody,
  StyledH2,
  StyledMain,
} from "../components/Styles";
import Title from "../components/Title";

export default function Blog() {
  return (
    <>
      <Title header="Blog | Joey Resume" />

      <StyledBodyWrapper>
        <Header page="Blog" />
        <StyledCentralBody>
          <Navbar />
          <StyledMain>
            <h2>Updates</h2>
            <ProjectListWrapper>
              {blogPost.map((entry) => (
                <ProjectEntryWrapper key={entry.id} padding="5">
                  <StyledH2 fontSize="16">{entry.title}</StyledH2>
                  <p>{entry.blog}</p>
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
