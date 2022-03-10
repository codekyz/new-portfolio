import styled from "styled-components";

const ResumeButton = styled.div`
  width: auto;
  height: auto;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 30px 70px;
  margin: 70px 0px;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
  cursor: pointer;
  span {
    font-size: 12px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Profile = () => {
  return (
    <a
      href="https://cyan-pudding-2bf.notion.site/Code-kyz-172958a68b49436db99bfccce0aaadf5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ResumeButton>
        더 알아보기
        <br />
        <span>Notion 이력서로 이동합니다</span>
      </ResumeButton>
    </a>
  );
};

export default Profile;
