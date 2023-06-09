import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { BREAKPOINTTABLET } from "../breakpoint";

function Achieve() {
  return (
    <AchieveWrap>
      <AchieveContainar>
        <Title>Achievement</Title>
        <Line />
        <ContentsBox>
          <LeftBox>
            <SubTitle>Dev Experience</SubTitle>
            <Content>
              2022.10 ~ 2023.04 <br />
              코드스테이츠 프론트엔드 과정 수료
            </Content>
          </LeftBox>
          <MiddleBox>
            <SubTitle>Education</SubTitle>
            <Content>
              2019.03 ~ 2022.08 <br />
              계명대학교 언론영상학 학사
            </Content>
          </MiddleBox>
          <RightBox>
            <SubTitle>Certificates</SubTitle>
            <Content>
              2022.12 <br />
              웹디자인 기능사 <br />
              <br />
              2019.02 <br />
              컴퓨터그래픽스운용 기능사 <br />
            </Content>
          </RightBox>
        </ContentsBox>
      </AchieveContainar>
    </AchieveWrap>
  );
}

export default Achieve;

const AchieveWrap = styled.div`
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
`;

const AchieveContainar = styled.div`
  width: 1100px;
  height: 980px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    align-items: center;
  }
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_bold}
  color: var(--color-main);
  margin-top: 3rem;
  margin-bottom: 1rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    text-align: center;
  }
`;

const Line = styled.div`
  border: 1px solid var(--color-gray);
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 90%;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: max-content;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftBox = styled.div`
  width: 33%;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const MiddleBox = styled.div`
  width: 33%;
  padding-left: 4rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    padding-left: 0;
  }
`;

const RightBox = styled.div`
  width: 33%;
  padding-left: 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-left: -1.2rem;
  }
`;

const SubTitle = styled.div`
  margin-bottom: 2rem;
  color: var(--color-main);
  ${FONT_STYLE.title.title_14_bold}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  line-height: 2;
`;
