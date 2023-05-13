import React, { useEffect } from "react";
import * as S from "./ProjectStyled";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

function Todo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <S.LinkBox>
          <a href="https://sienna0715.github.io/my-todo/">
            <S.Link>
              <BsBoxArrowInUpRight className="icon" />
              배포 사이트
            </S.Link>
          </a>
          <a href="https://github.com/sienna0715/my-todo">
            <S.Link margin="1rem">
              <BsBoxArrowInUpRight className="icon" />
              GitHub
            </S.Link>
          </a>
        </S.LinkBox>
        <S.Section>
          <S.Title>메인 페이지</S.Title>
          <S.ContentBox>
            <S.Img src={require("../asset/todo1.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  전체 보기, 체크 된 요소만 보기, 체크 안 된 요소만 보기의
                  필터링을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  로컬스토리지에 데이터가 저장되며, 우측 상단의 버튼을 누르면
                  리셋을 할 수 있는 기능을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../asset/todo2.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  투두 요소에 마우스 커서가 올라가면 휴지통 아이콘이 나타나고
                  해당 요소를 삭제할 수 있는 기능을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../asset/todo3.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  좌측 상단 버튼을 누르면 다크 모드로 변경되는 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.ButtonBox onClick={() => window.history.back()}>
          <S.Button>포트폴리오로 돌아가기 👈</S.Button>
        </S.ButtonBox>
      </S.Container>
    </S.Wrap>
  );
}

export default Todo;
