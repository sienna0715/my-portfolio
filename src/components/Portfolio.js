import React, { useEffect } from "react";
import * as S from "./PortfolioStyled";
import Profile from "../commons/Profile";
import { Link } from "react-router-dom";

function Portfolio({ currentTab, setCurrentTab }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <Profile currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <S.ProjectBox>
          <S.TitleBox>
            <S.Title>Sendy: 웹 편지 서비스</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.Contents>
            백엔드 3명, 프론트엔드 3명으로 이루어져서 진행한 프로젝트로, 편지를 작성하여 주고 받거나, SNS로 공유할 수 있는 웹 서비스 입니다.
          </S.Contents>
          <S.SubTitle>Preview</S.SubTitle>
          <S.Img src={require("../asset/sendy.gif")} alt="" />
          <S.SubTitle>개발 기간</S.SubTitle>
          <S.Contents>2023.03.03 ~ 2023.04.03 (1개월)</S.Contents>
          <S.SubTitle>사용한 기능</S.SubTitle>
          <S.ContentsBox>
            <S.Tag>React</S.Tag>
            <S.Tag>React Router</S.Tag>
            <S.Tag>React Hook Form</S.Tag>
            <S.Tag>Zustand</S.Tag>
            <S.Tag>axios</S.Tag>
            <S.Tag>Styled Components</S.Tag>
            <S.Tag>react-intersecton-observer</S.Tag>
            <S.Tag>react-icons</S.Tag>
            <S.Tag>react full-page</S.Tag>
            <S.Tag>Prettier</S.Tag>
            <S.Tag>Vercel</S.Tag>
          </S.ContentsBox>
          <Link to="/sendy">
            <S.Button>자세히 보러 가기 👉</S.Button>
          </Link>
        </S.ProjectBox>

        <S.ProjectBox>
          <S.TitleBox>
            <S.Title>영어 단어장</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.Contents>
            개인으로 진행한 프로젝트로, 평소 필요했던 기능을 담은 단어장 웹 어플리케이션입니다.
          </S.Contents>
          <S.SubTitle>Preview</S.SubTitle>
          <S.Img src={require("../asset/stackUp.gif")} alt="" />
          <S.SubTitle>개발 기간</S.SubTitle>
          <S.Contents>2023.05.10 ~ 2023.05.18 (9일)</S.Contents>
          <S.SubTitle>사용한 기능</S.SubTitle>
          <S.ContentsBox>
            <S.Tag>TypeScript</S.Tag>
            <S.Tag>React</S.Tag>
            <S.Tag>React Router</S.Tag>
            <S.Tag>fullcalendar</S.Tag>
            <S.Tag>Styled Components</S.Tag>
            <S.Tag>react-icons</S.Tag>
            <S.Tag>Prettier</S.Tag>
          </S.ContentsBox>
          <Link to="/stackup">
            <S.Button>자세히 보러 가기 👉</S.Button>
          </Link>
        </S.ProjectBox>
        <S.ProjectBox>
          <S.TitleBox>
            <S.Title>투두 리스트</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.Contents>
            리액트 기능에 익숙해지기 위하여, 개인으로 진행한 투두 리스트 웹 어플리케이션 입니다.
          </S.Contents>
          <S.SubTitle>Preview</S.SubTitle>
          <S.Img src={require("../asset/todo.gif")} alt="" />
          <S.SubTitle>개발 기간</S.SubTitle>
          <S.Contents>2023.01.12 ~ 2023.01.24 (12일)</S.Contents>
          <S.SubTitle>사용한 기능</S.SubTitle>
          <S.ContentsBox>
            <S.Tag>React</S.Tag>
            <S.Tag>PostCSS</S.Tag>
            <S.Tag>react-icons</S.Tag>
            <S.Tag>Prettier</S.Tag>
            <S.Tag>gh-pages</S.Tag>
          </S.ContentsBox>
          <Link to="/todo">
            <S.Button>자세히 보러 가기 👉</S.Button>
          </Link>
        </S.ProjectBox>
      </S.Container>
    </S.Wrap>
  );
}

export default Portfolio;
