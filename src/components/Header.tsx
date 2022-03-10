import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../atoms";

const Nav = styled.header`
  position: sticky;
  top: 0;
  opacity: 0.9;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 10px 30px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.textColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  Button:last-child {
    margin-left: auto;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 30px;
  }
`;

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  const handleModeToggle = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <Nav>
      <a href="#">
        <Button title="HOME">🏡</Button>
      </a>
      {/* <Button title="PROFILE">📂</Button> */}
      <Button onClick={handleModeToggle}>{isDark ? "🌞" : "🌙"}</Button>
    </Nav>
  );
};

export default Header;
