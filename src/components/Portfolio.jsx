import React from "react";
import * as S from "./styled";
import Profile from "../commons/Profile";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function Portfolio({ currentTab, setCurrentTab }) {
  return (
    <S.Wrap>
      <S.Container>
        <Profile currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <S.TitleBox>
          <S.Title>Stack</S.Title>
          <S.Line />
        </S.TitleBox>
        <S.SubTitle>LANGUAGE</S.SubTitle>
        <S.ContentsBox>
          <S.Tag>JavaScript</S.Tag>
          <S.Tag>TypeScript</S.Tag>
        </S.ContentsBox>
        <S.SubTitle>FRAMEWORK & LIBRARY</S.SubTitle>
        <S.ContentsBox>
          <S.Tag>React</S.Tag>
          <S.Tag>React Router</S.Tag>
          <S.Tag>Zustand</S.Tag>
          <S.Tag>PostCSS</S.Tag>
          <S.Tag>TailwindCSS</S.Tag>
          <S.Tag>Styled Components</S.Tag>
        </S.ContentsBox>
        <S.SubTitle>TOOLS</S.SubTitle>
        <S.ContentsBox>
          <S.Tag>Git</S.Tag>
          <S.Tag>Github</S.Tag>
          <S.Tag>Vercel</S.Tag>
          <S.Tag>AWS</S.Tag>
          <S.Tag>Postman</S.Tag>
          <S.Tag>Notion</S.Tag>
        </S.ContentsBox>
        <S.TitleBox>
          <S.Title>Projects</S.Title>
          <S.Line />
        </S.TitleBox>
        {/* 1 */}
        <S.Date>2023.03 ~ 2023.04</S.Date>
        <S.Section>
          <S.LeftBox>
            <S.SubTitle>웹 편지 서비스</S.SubTitle>
          </S.LeftBox>
          <S.RightBox>
            <S.Contents>
              카카오톡에서 생일 문자를 보낼 때, ‘좀 더 특별하게 보낼 수 있는
              방법은 없을까?’ 라는 생각에서 착안하여 시작된 프로젝트입니다.
            </S.Contents>
            <S.Text>
              <a href="https://www.sendy.site">
                <BsBoxArrowInUpRight className="icon" />
                배포 사이트
              </a>
            </S.Text>
            <S.Text margin="1rem">
              <a href="https://github.com/sienna0715/letter-service">
                <BsBoxArrowInUpRight className="icon" />
                GitHub
              </a>
            </S.Text>
            <S.SubTitle>Stack I used</S.SubTitle>
            <S.ContentsBox>
              <S.Tag>React</S.Tag>
              <S.Tag>React Router</S.Tag>
              <S.Tag>React Hook Form</S.Tag>
              <S.Tag>Zustand</S.Tag>
              <S.Tag>axios</S.Tag>
              <S.Tag>react-intersecton-observer</S.Tag>
              <S.Tag>Styled Components</S.Tag>
              <S.Tag>react-icons</S.Tag>
              <S.Tag>react full-page</S.Tag>
              <S.Tag>Prettier</S.Tag>
              <S.Tag>Vercel</S.Tag>
            </S.ContentsBox>
            <S.SubTitle>Feature I made</S.SubTitle>
            <S.BulletedText>
              무한스크롤을 사용한 우편함 페이지 제작
            </S.BulletedText>
            <S.BulletedText>
              무한스크롤을 사용한 휴지통 페이지 제작
            </S.BulletedText>
            <S.BulletedText>
              React Hook Form을 사용한 비밀번호 변경 페이지 제작
            </S.BulletedText>
            <S.BulletedText>풀페이지를 이용한 메인 페이지 제작</S.BulletedText>
            <S.BulletedText>반응형 및 CSS 구현</S.BulletedText>
            <S.Img src={require("../images/sendy.gif")} alt="" />
          </S.RightBox>
        </S.Section>
        <S.SectionLine />
        {/* 2 */}
        <S.Date>2023.03 ~ 2023.04</S.Date>
        <S.Section>
          <S.LeftBox>
            <S.SubTitle>영어 단어장</S.SubTitle>
          </S.LeftBox>
          <S.RightBox>
            <S.Contents>
              실전 경험을 쌓기 위해, 평소 필요했던 서비스를 타입스크립트와
              리액트를 사용하여 제작하였습니다. (아직 개발 중)
            </S.Contents>
            <S.Text>
              <del>
                <BsBoxArrowInUpRight className="icon" />
                배포 사이트
              </del>
            </S.Text>
            <S.Text margin="1rem">
              <del>
                <BsBoxArrowInUpRight className="icon" />
                GitHub
              </del>
            </S.Text>
            <S.SubTitle>Stack I used</S.SubTitle>
            <S.ContentsBox>
              <S.Tag>TypeScript</S.Tag>
              <S.Tag>React</S.Tag>
              <S.Tag>React Router</S.Tag>
              <S.Tag>Styled Components</S.Tag>
              <S.Tag>react-icons</S.Tag>
              <S.Tag>Prettier</S.Tag>
            </S.ContentsBox>
            <S.SubTitle>Feature I made</S.SubTitle>
            <S.BulletedText>단어장(CRUD)</S.BulletedText>
            <S.BulletedText>
              URL을 저장하여 쉽게 접속할 수 있는 즐겨찾기 메뉴
            </S.BulletedText>
            <S.BulletedText>
              암기한 단어 갯수, 목표를 확인할 수 있는 챌린지 메뉴
            </S.BulletedText>
            <S.TempTitle>피그마 디자인 예시</S.TempTitle>
            <S.Img src={require("../images/stackUp.gif")} alt="" />
          </S.RightBox>
        </S.Section>
      </S.Container>
    </S.Wrap>
  );
}

export default Portfolio;
