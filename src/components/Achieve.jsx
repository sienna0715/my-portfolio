import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";

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
              TOELC 800 <br />
              <br />
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
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

const AchieveContainar = styled.div`
  width: 1220px;
  height: 980px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Line = styled.div`
  border: 1px solid var(--color-border);
  margin-bottom: 2rem;
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
`;

const LeftBox = styled.div`
  width: 35%;
  padding-left: 3rem;
`;

const MiddleBox = styled.div`
  width: 35%;
  padding-left: 3rem;
`;

const RightBox = styled.div`
  width: 30%;
  padding-left: 2rem;
`;

const SubTitle = styled.div`
  margin-bottom: 1rem;
  color: var(--color-gray);
  ${FONT_STYLE.title.title_14_extraBold}
`;

const Content = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  line-height: 2;
`;
