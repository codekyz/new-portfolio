import styled from "styled-components";

const Nav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.textColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
  return (
    <Nav>
      <Button>🏡</Button>
      <Button>🌙</Button>
      <Button>🌞</Button>
    </Nav>
  );
};

export default Header;