import React, { useEffect } from "react";
import * as S from "./ResumeStyled";
import Profile from "../commons/Profile";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function Resume({ currentTab, setCurrentTab }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <S.Wrap>
      <S.Container>
        <Profile currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <S.Box>
          <S.TitleBox>
            <S.Title>Introduce</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.Intro>
            "직접 부딪히며 배움을 얻자" 라는 모토를 가지고 다양한 학습 방법으로
            학습을 이어가고 있습니다. <br />
            상황에 맞는 학습 환경을 선택하여 효율적인 방식으로 경험을 쌓아가고
            있습니다. <br />
            <br />
            6개월간 개발 교육 프로그램에 참여하여, 동료들과 학습을 공유하고
            프로젝트도 함께 하며 개발 역량을 쌓아왔습니다. 교육 프로그램이 끝난
            이후에도 배움을 놓지 않기 위해 2개의 스터디를 개설하여 운영하고
            있습니다. 학습을 하면서 얻은 지식은 블로깅을 통해 기록하고 있습니다.
            <br />
            <br />
            현재는 개인 사이드 프로젝트와 사용하는 기술을 더 잘 활용하기 위해
            블로깅을 하며 이론 학습도 이어가고 있습니다. 또한 프로젝트를
            진행하며 만난 수많은 에러 중 타입 때문에 정말 큰 고생을 하다 보니
            Typescript를 공부하고 있습니다.
          </S.Intro>
        </S.Box>
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
              웹으로 편지를 주고받을 수 있는 서비스 입니다.
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
          </S.RightBox>
        </S.Section>
        <S.SectionLine />
        {/* 2 */}
        <S.Date>2023.05 ~ 2023.05</S.Date>
        <S.Section>
          <S.LeftBox>
            <S.SubTitle>영어 단어장</S.SubTitle>
          </S.LeftBox>
          <S.RightBox>
            <S.Contents>
              평소 필요했던 서비스를 타입스크립트와 리액트를 사용하여
              제작하였습니다. <br /> (아직 개발 중 | 2023.05.20 배포 예정)
            </S.Contents>
            <S.Text>
              <del>
                <BsBoxArrowInUpRight className="icon" />
                배포 사이트
              </del>
            </S.Text>
            <S.Text margin="1rem">
              <a href="https://github.com/sienna0715/stackUp">
                <BsBoxArrowInUpRight className="icon" />
                GitHub
              </a>
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
          </S.RightBox>
        </S.Section>
        <S.SectionLine />
        {/* 3 */}
        <S.Date>2023.01 ~ 2023.01</S.Date>
        <S.Section>
          <S.LeftBox>
            <S.SubTitle>투두 리스트</S.SubTitle>
          </S.LeftBox>
          <S.RightBox>
            <S.Contents>
              리액트 기능에 익숙해지기 위하여, 투두 리스트를 제작하였습니다.
            </S.Contents>
            <S.Text>
              <a href="https://sienna0715.github.io/my-todo/">
                <BsBoxArrowInUpRight className="icon" />
                배포 사이트
              </a>
            </S.Text>
            <S.Text margin="1rem">
              <a href="https://github.com/sienna0715/my-todo">
                <BsBoxArrowInUpRight className="icon" />
                GitHub
              </a>
            </S.Text>
            <S.SubTitle>Stack I used</S.SubTitle>
            <S.ContentsBox>
              <S.Tag>React</S.Tag>
              <S.Tag>PostCSS</S.Tag>
              <S.Tag>react-icons</S.Tag>
              <S.Tag>Prettier</S.Tag>
              <S.Tag>gh-pages</S.Tag>
            </S.ContentsBox>
            <S.SubTitle>Feature I made</S.SubTitle>
            <S.BulletedText>CRUD</S.BulletedText>
            <S.BulletedText>다크모드 지원</S.BulletedText>
        
          </S.RightBox>
        </S.Section>
        <S.Box>
          <S.TitleBox>
            <S.Title>Dev Experience</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.Date>2022.10 ~ 2023.04</S.Date>
          <S.Section>
            <S.LeftBox>
              <S.SubTitle>코드스테이츠 프론트엔드</S.SubTitle>
            </S.LeftBox>
            <S.RightBox>
              <S.BulletedText>
                자바스크립트를 배우고 동작 원리에 대해 이해할 수 있었습니다.
              </S.BulletedText>
              <S.BulletedText>
                리액트를 사용함으로써 SPA를 구현하고, 상태관리에 관심이
                생겼습니다.
              </S.BulletedText>
              <S.BulletedText>
                프론트엔드와 백엔드가 협업하여 프로젝트를 하며 많은 점을
                배웠습니다.
              </S.BulletedText>
              <S.BulletedText>
                무한 스크롤링에 대해 기술 발표를 진행했습니다.
              </S.BulletedText>
            </S.RightBox>
          </S.Section>
          <S.Date>2023.04.30</S.Date>
          <S.Section>
            <S.LeftBox>
              <S.SubTitle>점핏 북콘서트</S.SubTitle>
            </S.LeftBox>
            <S.RightBox>
              <S.BulletedText>
                혼자서 고민하는 것이 아닌 교류를 통해 프론트엔드 신입들의 다양한 이슈들을 파악할 수 있었습니다.
              </S.BulletedText>
            </S.RightBox>
          </S.Section>
        </S.Box>
        <S.Box>
          <S.TitleBox>
            <S.Title>Education</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.RowBox>
            <S.SubTitle>계명대학교</S.SubTitle>
            <S.Contents margin="0" padding="0.5rem">
              언론영상학 학사
            </S.Contents>
          </S.RowBox>
          <S.Date margin="0.5rem">2019.03 ~ 2022.08</S.Date>
        </S.Box>
        <S.Box>
          <S.TitleBox>
            <S.Title>Certificates</S.Title>
            <S.Line />
          </S.TitleBox>
          <S.SubTitle lineheight="2">
            웹디자인기능사 <S.Gray>2022.12</S.Gray>
          </S.SubTitle>
          <S.SubTitle lineheight="2">
            컴퓨터그래픽스운용기능사 <S.Gray>2019.02</S.Gray>
          </S.SubTitle>
        </S.Box>
      </S.Container>
    </S.Wrap>
  );
}

export default Resume;
