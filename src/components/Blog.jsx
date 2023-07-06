import React from "react";
import styled from "styled-components";
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
            <Button>
              Go to blog <FiArrowRight />
            </Button>
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
`;

const CardBox = styled.div`
  padding-left: 2rem;
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  margin-right: 3rem;
  &:nth-last-child(2) {
    margin-right: 0;
  }
  border-radius: 2.2rem;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.8);
  background-color: var(--color-card);
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
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
  color: var(--color-gray);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const CardTitle = styled.div`
  color: var(--color-white);
  ${FONT_STYLE.text.text_12_medium}
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
`;
