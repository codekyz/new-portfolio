import styled from "styled-components";
import Header from "./Header";
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
      <Profile />
      <Project />
    </Wrapper>
  );
};

export default Portfolio;
