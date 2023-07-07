import React from "react";
import styled, { keyframes } from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { Link } from "react-router-dom";
import { BREAKPOINTTABLET } from "../breakpoint";
//icons
import { FiArrowRight } from "react-icons/fi";

function Blog() {
  return (
    <BlogWrap>
      <BlogContainar>
        <ContentsBox>
          <Title>Keep posting on a blog!</Title>
          <CardBox>
            <Link to="https://seven-day-five.tistory.com/26">
              <Card>
                <ImgBox>
                  <Img
                    src={require("../asset/memoticon3.png")}
                    alt="미모티콘"
                  />
                </ImgBox>
                <TextBox>
                  <CardDate>2023.07.03</CardDate>
                  <CardTitle>Vite는 맛있어:)</CardTitle>
                </TextBox>
              </Card>
            </Link>
            <Link to="https://seven-day-five.tistory.com/5">
              <Card>
                <ImgBox>
                  <Img
                    src={require("../asset/memoticon1.png")}
                    alt="미모티콘"
                  />
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
              <Card>
                <ImgBox>
                  <Img
                    src={require("../asset/memoticon2.png")}
                    alt="미모티콘"
                  />
                </ImgBox>
                <TextBox>
                  <CardDate>2023.04.14</CardDate>
                  <CardTitle>[React] React Hook에 대해 몰랐던 사실들</CardTitle>
                </TextBox>
              </Card>
            </Link>
          </CardBox>
          <ButtonBox>
            <Link to="https://seven-day-five.tistory.com/">
              <Button>
                Go to blog <FiArrowRight />
              </Button>
            </Link>
          </ButtonBox>
        </ContentsBox>
      </BlogContainar>
    </BlogWrap>
  );
}

export default Blog;

const BlogWrap = styled.div`
  background-color: var(--color-lightgray);
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);
`;

const BlogContainar = styled.div`
  width: 1220px;
  height: max-content;
  position: relative;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_bold}
  margin-top: 3rem;
  margin-bottom: 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_30_bold}
  }
`;

const Vibration = keyframes`
  from {
    transform: rotate(2deg);
  }
  to {
    ransform: rotate(-2deg);
  }
`;

const CardBox = styled.div`
  padding-left: 2rem;
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  margin-right: 3rem;
  border-radius: 2.2rem;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.8);
  background-color: var(--color-card);
  cursor: pointer;
  &:hover {
    animation: ${Vibration} 300ms;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 200px;
    height: 300px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    height: 180px;
  }
`;
const Img = styled.img`
  width: 85%;
`;

const TextBox = styled.div`
  background-color: var(--color-darkgray);
  width: 100%;
  height: 150px;
  padding: 1rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  line-height: 1.7;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    height: 120px;
  }
`;

const CardDate = styled.div`
  color: var(--color-gray);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.text.text_9_medium}
  }
`;

const CardTitle = styled.div`
  color: var(--color-white);
  ${FONT_STYLE.text.text_12_medium}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.text.text_9_medium}
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }
`;

const ButtonBox = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

const Button = styled.button`
  ${FONT_STYLE.title.title_16_bold}
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--color-submain);
    animation: ${Vibration} 300ms;
  }
`;
