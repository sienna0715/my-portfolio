import React from "react";
import * as S from "./styled";
import Profile from "../commons/Profile";

function Resume({ currentTab, setCurrentTab }) {
  return (
    <S.Wrap>
      <S.Container>
        <Profile currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <S.TitleBox>
          <S.Title>Introduce</S.Title>
          <S.Line />
        </S.TitleBox>
        <S.Contents>
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
          개발에 관련된 선배 개발자들의 에세이나 영상 시청이 스스로에게 가장 큰
          동기부여가 되어주어 즐겨 보고 있습니다.
        </S.Contents>
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
              오프라인으로 참여하여 실감있는 현장을 경험할 수 있었습니다.
            </S.BulletedText>
            <S.BulletedText>
              다양한 개발 이슈를 알 수 있었습니다.
            </S.BulletedText>
            <S.BulletedText>
              어떤 마음가짐을 가지고 개발자로 살아가야할 지 고민하는 시간이
              되었습니다.
            </S.BulletedText>
          </S.RightBox>
        </S.Section>
        <S.TitleBox>
          <S.Title>Education</S.Title>
          <S.Line />
        </S.TitleBox>
        <S.Date>2019.03 ~ 2022.08</S.Date>
        <S.Section>
          <S.LeftBox>
            <S.SubTitle>계명대학교</S.SubTitle>
          </S.LeftBox>
          <S.RightBox>
            {" "}
            <S.Contents>언론영상학 학사</S.Contents>
          </S.RightBox>
        </S.Section>
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
      </S.Container>
    </S.Wrap>
  );
}

export default Resume;
