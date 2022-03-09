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
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  transition: 0.5s;
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
  transition: 0.3s;
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
          <a
            href="https://codekyz.github.io/todolist-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/todolist_react.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Things To Do
              <a
                href="https://github.com/codekyz/todolist-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React, TypeScript, Recoil, LocalStorage</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://codekyz.github.io/beginning-of-the-day/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/beginning_of_the_day.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 하루의 시작
              <a
                href="https://github.com/codekyz/beginning-of-the-day"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React, TypeScript, LocalStorage</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://codekyz.github.io/converter-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/converter_react.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Super Converter
              <a
                href="https://github.com/codekyz/converter-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
            </p>
            <p>React</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://codekyz.github.io/momentum-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/momentum_js.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Momentum-js
              <a
                href="https://github.com/codekyz/momentum-js"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
            </p>
            <p>JavaScript, LocalStorage</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://codekyz.github.io/paint-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/paint_js.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Paint
              <a
                href="https://github.com/codekyz/paint-js"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
            </p>
            <p>JavaScript</p>
          </Description>
        </ProjectCard>

        <ProjectCard>
          <a
            href="https://codekyz.github.io/time-to-go-home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thum>
              <img
                src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/time_to_go_home.PNG?raw=true"
                alt=""
              ></img>
            </Thum>
          </a>
          <Description>
            <p>
              📑 Time to go home
              <a
                href="https://github.com/codekyz/time-to-go-home"
                target="_blank"
                rel="noopener noreferrer"
              >
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
