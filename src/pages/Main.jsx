import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { Link } from "react-router-dom";
//icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
// components
import Project from "../components/Project";
import Blog from "../components/Blog";
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
        <ContentsBox>
          <LeftBox>
            <Title>
              I’m SION, a <br />
              FrontEnd Developer
            </Title>
          </LeftBox>
          <Bar />
          <RightBox>
            <Text>sion8120@gmail.com</Text>
            <Text>010-7405-5887</Text>
            <LinkIcon>
              <Link to="https://github.com/sienna0715">
                <BsGithub />
              </Link>
              <Link to="https://seven-day-five.tistory.com/">
                <SiTistory className="tistory" />
              </Link>
            </LinkIcon>
          </RightBox>
        </ContentsBox>
      </MainContainar>
      <Project />
      <Blog />
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
  background-color: var(--color-main);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
`;

const MainContainar = styled.div`
  width: 1220px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2rem;
  }
`;

const LeftBox = styled.div`
  width: 55%;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: max-content;
  }
`;
const RightBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    align-items: flex-end;
    margin-top: 3rem;
  }
`;

const Bar = styled.div`
  width: 15%;
  height: 0.2rem;
  transform: rotate(-70deg);
  background-color: var(--color-main);
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: none;
  }
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_bold}
  text-align: right;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: max-content;
    ${FONT_STYLE.title.title_35_bold}
  }
`;

const Text = styled.div`
  ${FONT_STYLE.text.text_15_medium}
  color: var(--color-main);
  line-height: 2;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
`;

const LinkIcon = styled.div`
  margin-top: 1rem;
  font-size: 2.5rem;
  display: flex;
  .tistory {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }
`;
