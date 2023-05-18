import React from 'react';
import * as S from "./ProjectStyled";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

function StackUp() {
  return (
    <S.Wrap>
      <S.Container>
        <S.LinkBox>
          <a href="https://stack-up.vercel.app/">
            <S.Link>
              <BsBoxArrowInUpRight className="icon" />
              배포 사이트
            </S.Link>
          </a>
          <a href="https://github.com/sienna0715/stackUp">
            <S.Link margin="1rem">
              <BsBoxArrowInUpRight className="icon" />
              GitHub
            </S.Link>
          </a>
        </S.LinkBox>
        <S.Section>
          <S.Title>메인 페이지 (word)</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/stackup1.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  등록한 단어를 확인할 수 있습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  원하는 단어를 삭제할 수 있습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  원하는 단어를 북마크할 수 있습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/stackup4.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  단어를 추가할 수 있습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.Section>
          <S.Title>동영상 저장 페이지 (keep)</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/stackup2.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  유튜브 동영상을 저장할 수 있는 페이지 입니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/stackup5.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  원하는 제목으로 해당 영상의 url을 넣어 저장합니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.Section>
          <S.Title>동영상 저장 페이지 (keep)</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/stackup3.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  <S.BordText>FullCalendar</S.BordText>을 사용하여 달력을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  등록한 단어의 갯수를 확인할 수 있습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  북마크한 단어의 갯수를 확인할 수 있습니다.
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
  )
}

export default StackUp