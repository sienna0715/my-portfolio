import React from "react";
import styled from "styled-components";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { Link } from "react-router-dom";

function Profile({ currentTab, setCurrentTab }) {
  const handleClick = () => {
    if (currentTab === "Portfolio") {
      setCurrentTab("Resume");
    } else {
      setCurrentTab("Portfolio");
    }
  };

  return (
    <ProfileWrap>
      <ProfileImg src={require("../images/sion.jpg")} />
      <ProfileContainer>
        <Name>이시온 | FrontEnd Dev</Name>
        <Contents>
          <FaQuoteLeft className="icon" />
        </Contents>
        <Intro>배움을 얻기 위해 능동적으로 움직이며 성장하고 있습니다.</Intro>
        <Contents>
          <BiEnvelope className="icon" /> sion8120@gmail.com
        </Contents>
        <Contents>
          <BiPhoneCall className="icon" /> 010-7405-5887
        </Contents>
        <Line />
        <LinkList>
          <LinkItem>
            <a href="https://github.com/sienna0715">
              <BsGithub />
            </a>
          </LinkItem>
          <LinkItem>
            <a href="https://seven-day-five.tistory.com/">
              <SiBloglovin />
            </a>
          </LinkItem>
          <MovePage onClick={handleClick}>
            {currentTab === "Portfolio" ? (
              <Link to="/resume">이력서 보러가기 👉</Link>
            ) : (
              <Link to="/">포트폴리오 보러가기 👉</Link>
            )}
          </MovePage>
        </LinkList>
      </ProfileContainer>
    </ProfileWrap>
  );
}

export default Profile;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
`;

const ProfileImg = styled.img`
  width: 200px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const Name = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Contents = styled.li`
  line-height: 1.8;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 0.5rem;
  }
`;

const Intro = styled.span`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

const LinkList = styled.ul`
  font-size: 1.5rem;
  display: flex;
`;

const LinkItem = styled.li`
  margin-right: 1rem;
`;

const MovePage = styled.li`
  flex-grow: 2;
  font-size: 1rem;
  text-align: right;
`;
