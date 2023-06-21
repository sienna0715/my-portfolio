import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { Link } from "react-router-dom";
//icons
import { FiArrowRight } from "react-icons/fi";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
// components
import Introduce from "../components/Introduce";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Achieve from "../components/Achieve";
import { BREAKPOINTTABLET } from "../breakpoint";

function Main() {
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainWrap>
      <TopButton onClick={handleClickTop}>
        <MdKeyboardDoubleArrowUp />
      </TopButton>
      <MainContainar>
        <LeftBox>
          <MyImg src={require("../asset/sion.png")} alt="sion" />
          <Circle1 />
          <Circle2 />
          <Circle3 />
        </LeftBox>
        <RightBox>
          <Bar />
          <Title>
            I’m SION, a <br />
            FrontEnd Developer
          </Title>
          <ContentsBox>
            <SubTitle>ABOUT ME</SubTitle>
            <Contents>
              다양한 기술을 배우는 걸 즐기며, 능동적으로 <br />
              배움을 채워 더 좋은 서비스를 만들고자 합니다.
            </Contents>
          </ContentsBox>
          <ContentsBox>
            <SubTitle>MY WORK</SubTitle>
            <Contents>
              리액트, 타입스크립트를 이용한 프로젝트를 <br /> 진행하였습니다.
            </Contents>
            <Link to="/portfolio">
              <Button>
                PORTFOLIO <FiArrowRight className="arrow" />
              </Button>
            </Link>
          </ContentsBox>
          <LinkIcon>
            <Link to="https://github.com/sienna0715">
              <BsGithub />
            </Link>
            <Link to="https://seven-day-five.tistory.com/">
              <SiTistory className="tistory" />
            </Link>
          </LinkIcon>
        </RightBox>
      </MainContainar>
      <Introduce />
      <Stack />
      <Project />
      <Achieve />
    </MainWrap>
  );
}

export default Main;

const TopButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 999;
  color: var(--color-white);
  background-color: var(--color-point);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MainWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    overflow-x: hidden;
  }
`;

const MainContainar = styled.div`
  width: 1220px;
  height: 900px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LeftBox = styled.div`
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: none;
  }
`;
const RightBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-top: 0;
    align-items: center;
  }
`;

const MyImg = styled.img`
  width: 550px;
  position: absolute;
  bottom: 0;
  left: 5rem;
  z-index: 2;
`;

const Circle1 = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: var(--color-lightgray);
  position: absolute;
  bottom: -50px;
  left: 600px;
  z-index: 3;
`;
const Circle2 = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: var(--color-darkgray);
  position: absolute;
  bottom: 0;
  left: 400px;
`;
const Circle3 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--color-tag);
  position: absolute;
  bottom: -5px;
  left: 0;
  z-index: 3;
`;

const Bar = styled.div`
  width: 10rem;
  height: 0.5rem;
  background-color: var(--color-white);
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin: 3rem 0;
  text-align: right;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    text-align: center;
  }
`;

const ContentsBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
  z-index: 10;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    align-items: center;
  }
`;

const SubTitle = styled.div`
  ${FONT_STYLE.title.title_14_extraBold}
  text-align: right; 
`;

const Contents = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  color: var(--color-gray);
  margin: 2rem 0;
  text-align: right;
  line-height: 1.5;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    text-align: center;
  }
`;

const Button = styled.button`
  margin-bottom: 2rem;
  ${FONT_STYLE.text.text_12_medium}
  color: var(--color-white);
  background-color: transparent;
  border: none;
  display: flex;
  .arrow {
    margin-left: 0.5rem;
  }
`;

const LinkIcon = styled.div`
  font-size: 3rem;
  display: flex;
  .tistory {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }
`;
