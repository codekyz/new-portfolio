import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin: 30px 0px;
`;

const Photo = styled.div`
  margin-right: 30px;
  img {
    border-radius: 5px;
    width: 180px;
    height: auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.div`
  padding-top: 20px;
  h1 {
    padding: 0 5px;
    display: inline;
    font-size: 24px;
    font-weight: 800;
    border-bottom: 5px solid ${(props) => props.theme.hoverColor};
  }
  p {
    margin-top: 30px;
    line-height: 20px;
  }
`;

const Buttons = styled.div`
  margin-top: 10px;
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

const Profile = () => {
  return (
    <Container>
      <Photo>
        <img src="https://github.com/codekyz/new-portfolio/blob/main/public/%EA%B9%80%EC%9C%A4%EC%A0%95.jpg?raw=true" />
      </Photo>
      <GreetingBox>
        <Greeting>
          <h1>Hi there👋</h1>
          <p>
            안녕하세요.
            <br />
            유저에게 편안한 서비스와 경험을
            <br />
            제공하는 개발자가 되고 싶은
            <br />
            프론트엔드 개발자 김윤정입니다.
            <br />
            <br />
            📧codekyz0111@gmail.com
          </p>
          <Buttons>
            <a href="https://github.com/codekyz" target="_blank">
              <Button>GITHUB</Button>
            </a>
            <a href="https://velog.io/@kyz0111" target="_blank">
              <Button>VELOG</Button>
            </a>
            <Button>이력서 다운로드</Button>
          </Buttons>
        </Greeting>
      </GreetingBox>
    </Container>
  );
};

export default Profile;
