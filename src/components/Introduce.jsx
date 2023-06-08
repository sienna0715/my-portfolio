import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { Link } from "react-router-dom";
//icons
import { FiArrowRight } from "react-icons/fi";

function Introduce() {
  return (
    <IntroWrap>
      <IntroContainar>
        <LeftBox>
          <Title>INTRO</Title>
          <Link to="https://seven-day-five.tistory.com/5">
            <Card>
              <ImgBox>
                <Img src={require("../asset/memoticon1.png")} alt="미모티콘" />
              </ImgBox>
              <TextBox>
                <CardDate>2023.03.21</CardDate>
                <CardTitle>
                  Intersection Observer API로 무한 스크롤 구현하기
                </CardTitle>
              </TextBox>
            </Card>
          </Link>
          <Link to="https://seven-day-five.tistory.com/8">
            <Card absolute="absolute">
              <ImgBox>
                <Img src={require("../asset/memoticon2.png")} alt="미모티콘" />
              </ImgBox>
              <TextBox>
                <CardDate>2023.04.14</CardDate>
                <CardTitle>[React] React Hook에 대해 몰랐던 사실들</CardTitle>
              </TextBox>
            </Card>
          </Link>
          <ButtonBox>
            <Button>
              Go to blog <FiArrowRight />
            </Button>
          </ButtonBox>
        </LeftBox>
        <RightBox>
          "성실함은 모든 것을 가능하게 한다." <br />
          라는 모토를 가지고 다양한 학습 방법으로 학습을 이어가고
          있습니다. 상황에 맞는 학습 환경을 선택하여 효율적인 방식으로 경험을
          쌓아가고 있습니다. <br />
          <br />
          6개월간 개발 교육 프로그램에 참여하여, 동료들과 학습을 공유하고
          프로젝트도 함께 하며 개발 역량을 쌓아왔습니다. 교육 프로그램이 끝난
          이후에도 배움을 놓지 않기 위해 2개의 스터디를 개설하여 운영하고
          있습니다. 학습을 하면서 얻은 지식은 블로깅을 통해 기록하고 있습니다.{" "}
          <br />
          <br />
          현재는 개인 사이드 프로젝트와 사용하는 기술을 더 잘 활용하기 위해
          블로깅을 하며 이론 학습도 이어가고 있습니다. 또한 프로젝트를 진행하며
          만난 수많은 에러 중 타입 때문에 정말 큰 고생을 하다 보니 Typescript를
          공부하고 있습니다.
        </RightBox>
      </IntroContainar>
    </IntroWrap>
  );
}

export default Introduce;

const IntroWrap = styled.div`
  width: 100%;
  background-color: var(--color-submain);
  display: flex;
  justify-content: center;
`;

const IntroContainar = styled.div`
  width: 1220px;
  height: 980px;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const LeftBox = styled.div`
  width: 550px;
  height: 100%;
  padding: 3rem;
  background-color: var(--color-main);
  position: relative;
`;

const RightBox = styled.div`
  width: 670px;
  height: 100%;
  padding-left: 2rem;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  ${FONT_STYLE.text.text_12_medium}
  letter-spacing: 2px;
  line-height: 2;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background-color: var(--color-tag);
  width: 300px;
  height: 400px;
  border-radius: 2.2rem;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  position: ${(props) => (props.absolute ? props.absolute : "none")};
  bottom: 11rem;
  right: 2rem;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 90%;
`;

const TextBox = styled.div`
  background-color: var(--color-darkgray);
  width: 100%;
  height: 150px;
  padding: 1rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  line-height: 1.7;
`;

const CardDate = styled.div`
  color: var(--color-tag);
  padding-bottom: 0.2rem;
`;

const CardTitle = styled.div``;

const ButtonBox = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 2px solid var(--color-tag);
  background-color: transparent;
  color: var(--color-white);
  ${FONT_STYLE.text.text_15_medium}
  display: flex;
  align-items: center;
`;
