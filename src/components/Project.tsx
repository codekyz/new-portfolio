import styled from "styled-components";

const Title = styled.h1`
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  p:first-child {
    font-size: 18px;
    margin-bottom: 5px;
  }
  p:last-child {
    font-size: 15px;
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
            <p>📑 Things To Do</p>
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
            <p>📑 하루의 시작</p>
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
            <p>📑 Super Converter</p>
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
            <p>📑 Momentum-js</p>
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
            <p>📑 Paint</p>
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
            <p>📑 Time to go home</p>
            <p>JavaScript</p>
          </Description>
        </ProjectCard>
      </Projects>
    </>
  );
};

export default Project;
