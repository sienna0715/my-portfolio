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
          개발에 흥미를 느껴 시작한 이후부터, 무엇을 잘 할 수 있는 개발자인지를 끊임없이 고민하며 성장하고 있습니다. <br /><br />
          물론 신입 개발자가 이 정답을 찾기란 쉽지 않을 것입니다. 그러나 프론트엔드 개발자로서 단단하게 성장하고 싶다는 확신을 가지고, 자바스크립에서 
          시작하여 리액트, 타입스크립트를 공부하였고, 나의 분야만 이해하는 것이 아닌 협업을 통해 또는 다양한 코드를 접하고 이해하기 위해 고민을 하다보니 
          내가 알고 있는 프로그래밍 언어를 더욱더 활용적으로 사용하면서 애플리케이션의 전반적인 작동을 조금이나마 이해할 수 있을 것 같아 Node.js도 공부하고 있습니다. <br /><br />
          알게된 사실을 이해하는 것으로만 그치지 않고, 블로그를 통해 습득한 지식을 정리하며 공유하고 있습니다.
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
