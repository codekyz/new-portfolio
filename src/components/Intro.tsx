import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin: 30px 0px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Photo = styled.div`
  margin-right: 30px;
  img {
    border-radius: 5px;
    width: 180px;
    height: auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Greeting = styled.div`
  padding-top: 20px;
  h1 {
    padding: 0 5px;
    display: inline;
    font-size: 24px;
    border-bottom: 5px solid ${(props) => props.theme.hoverColor};
  }
  p {
    margin-top: 30px;
    line-height: 24px;
    span {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      padding: 0 30px;
    }
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
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const Intro = () => {
  return (
    <Container>
      <Photo>
        <img
          src="https://github.com/codekyz/new-portfolio/blob/main/src/assets/%EA%B9%80%EC%9C%A4%EC%A0%95.jpg?raw=true"
          alt=""
        />
      </Photo>
      <GreetingBox>
        <Greeting>
          <h1>Hi there๐</h1>
          <p>
            ์๋ํ์ธ์. ํ๋ก ํธ์๋ ๊ฐ๋ฐ์๋ฅผ ๊ฟ๊พธ๋ <span>๊น์ค์ </span>์๋๋ค.
            <br /> JavaScript๋ฅผ ์ข์ํ๊ณ  React๋ฅผ ๊ณต๋ถํ๊ณ  ์์ต๋๋ค.
            <br />
            ์ ์ ์๊ฒ ํธ์ํ ์๋น์ค์ ๊ฒฝํ์ ์ ๊ณตํ  ์ ์๋ ๊ฐ๋ฐ์๊ฐ ๋๊ณ 
            ์ถ์ต๋๋ค.
            <br />
            {/* <br />
            ๐งcodekyz0111@gmail.com */}
          </p>
          <Buttons>
            <a
              href="https://github.com/codekyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>GITHUB</Button>
            </a>
            <a
              href="https://velog.io/@kyz0111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>VELOG</Button>
            </a>
            {/* <Button>์ด๋ ฅ์ ๋ค์ด๋ก๋</Button> */}
          </Buttons>
        </Greeting>
      </GreetingBox>
    </Container>
  );
};

export default Intro;
