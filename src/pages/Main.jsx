import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
//icons
import { FiArrowRight } from "react-icons/fi";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
// components
import Introduce from "../components/Introduce";
import { Link } from "react-router-dom";

function Main() {
  return (
    <MainWrap>
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
            <Contents>Lorem ipsum dolor sit amet consectetur</Contents>
            <Button>
              LEARN MORE <FiArrowRight className="arrow" />
            </Button>
          </ContentsBox>
          <ContentsBox>
            <SubTitle>MY WORK</SubTitle>
            <Contents>Lorem ipsum dolor sit amet consectetur</Contents>
            <Button>
              PORTFOLIO <FiArrowRight className="arrow" />
            </Button>
          </ContentsBox>
          <MoveIcon>
            <Link to="https://github.com/sienna0715">
              <BsGithub />
            </Link>
            <Link to="https://seven-day-five.tistory.com/">
              <SiTistory className="tistory" />
            </Link>
          </MoveIcon>
        </RightBox>
      </MainContainar>
      <Introduce />
    </MainWrap>
  );
}

export default Main;

const MainWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainar = styled.div`
  width: 1220px;
  height: 900px;
  position: relative;
  overflow: hidden;
`;

const LeftBox = styled.div``;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5rem;
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
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  z-index: 10;
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
`;

const Button = styled.button`
  ${FONT_STYLE.text.text_12_medium}
  margin-top: 1rem;
  color: var(--color-white);
  background-color: transparent;
  border: none;
  display: flex;
  .arrow {
    margin-left: 0.5rem;
  }
`;

const MoveIcon = styled.div`
  font-size: 3rem;
  display: flex;
  .tistory {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }
`;
