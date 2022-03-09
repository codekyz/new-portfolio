import styled from "styled-components";

const Title = styled.h1`
  padding: 5px 5px;
  margin-top: 20px;
  font-size: 24px;
  border-bottom: 5px solid ${(props) => props.theme.hoverColor};
`;

const Projects = styled.div`
  width: 650px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  margin: 50px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thum = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    opacity: 0.8;
    border: 1px solid ${(props) => props.theme.hoverColor};
  }
`;

const Description = styled.div`
  p:first-child {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 5px;
    a {
      margin-left: auto;
    }
  }
  p:last-child {
    font-size: 15px;
  }
`;

const Button = styled.button`
  font-family: "GowunBatang-Bold";
  border: none;
  padding: 3px 10px;
  margin-right: 5px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const Project = () => {
  return (
    <>
      <Title>Projects🎉</Title>
      <Projects>
        <ProjectCard>
          <a href="https://codekyz.github.io/todolist-react/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/todolist_react.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Things To Do
              <a href="https://github.com/codekyz/todolist-react">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React, TypeScript, Recoil, localStorage</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a href="https://codekyz.github.io/beginning-of-the-day/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/beginning_of_the_day.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 하루의 시작
              <a href="https://github.com/codekyz/beginning-of-the-day">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React, TypeScript, localStorage</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a href="https://codekyz.github.io/converter-react/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/converter_react.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Super Converter
              <a href="https://github.com/codekyz/converter-react">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a href="https://codekyz.github.io/momentum-js/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/momentum_js.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Momentum-js
              <a href="https://github.com/codekyz/momentum-js">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>JavaScript</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a href="https://codekyz.github.io/paint-js/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/paint_js.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Paint
              <a href="https://github.com/codekyz/paint-js">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>JavaScript</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a href="https://codekyz.github.io/time-to-go-home/">
            <Thum>
              <img src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/time_to_go_home.PNG?raw=true"></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Time to go home
              <a href="https://github.com/codekyz/time-to-go-home">
                <Button>GitHub</Button>
              </a>
            </p>
            <p>JavaScript</p>
          </Description>
        </ProjectCard>
      </Projects>
    </>
  );
};

export default Project;
