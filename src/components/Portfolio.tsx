import styled from "styled-components";
import Header from "./Header";
import Intro from "./Intro";
import Profile from "./Profile";
import Project from "./Project";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <Project />
      <Profile />
    </Wrapper>
  );
};

export default Portfolio;
