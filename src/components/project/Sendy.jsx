import React, { useEffect } from "react";
import * as S from "./ProjectStyled";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

function Sendy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <S.Wrap>
      <S.Container>
        <S.LinkBox>
          <a href="https://www.sendy.site">
            <S.Link>
              <BsBoxArrowInUpRight className="icon" />
              배포 사이트
            </S.Link>
          </a>
          <a href="https://github.com/sienna0715/letter-service">
            <S.Link margin="1rem">
              <BsBoxArrowInUpRight className="icon" />
              GitHub
            </S.Link>
          </a>
        </S.LinkBox>

        <S.Section>
          <S.Title>메인 페이지</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/sendy-main.gif")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  <S.BordText> fullPage.js를 이용</S.BordText>하여
                  제작하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  마지막 슬라이드에 배너가 흘러가는 애니메이션을 적용하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  모바일과 데스크 탑 기준으로 반응형 작업도 완료하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.Section>
          <S.Title>우편함 페이지</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/letterbox1.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  <S.BordText> react-intersecton-observer를 이용</S.BordText>
                  하여 무한스크롤을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  모바일과 데스크 탑 기준으로 반응형 작업도 완료하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/letterbox2.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  검색창(input)에 키워드에 일치하는 편지를 찾는 기능을
                  구현하였습니다. <br />
                  (수신함에서는 편지를 보낸 사람의 이름을, 발신함에서는 편지를
                  받은 사람의 이름을 기준함)
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/letterbox3.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  사용자가 원하는 기간의 편지만 볼 수 있도록 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  최신순, 오래된 순, 북마크에 해당하는 필터링 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/letterbox4.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  우측 하단 고정된 버튼을 통해 수신/발신함으로 바뀌는 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  휴지통 버튼을 누르면, 편지를 선택하여 휴지통으로 보내는 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.Section>
          <S.Title>휴지통 페이지</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/trash1.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>우편함과 마찬가지로 무한 스크롤 페이지 입니다.</S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  우측 하단 고정 버튼을 통해 수신/발신함으로 바뀌는 기능을
                  구현하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  모바일과 데스크 탑 기준으로 반응형 작업도 완료하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            <S.Img src={require("../../asset/trash2.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  체크 박스를 클릭한 후 영구 삭제 버튼을 누르면 모달 창이 나오는
                  기능을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
        </S.Section>
        <S.Section>
          <S.Title>비밀번호 변경 페이지</S.Title>
          <S.ContentBox>
            <S.Img src={require("../../asset/pwdchange1.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  <S.BordText>React Hook Form을 이용</S.BordText>하여
                  제작하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  모바일과 데스크 탑 기준으로 반응형 작업을 완료하였습니다.
                </S.Text>
              </S.BulletedText>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  사용자의 현재 비밀번호와 작성한 비밀번호가 일치하는 지
                  검증하는 기능을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            {" "}
            <S.Img src={require("../../asset/pwdchange2.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  서버로 부터 성공 응답을 받으면 비밀번호를 변경할 수 있는
                  페이지로 넘어가는 기능을 구현하였습니다.
                </S.Text>
              </S.BulletedText>
            </S.TextBox>
          </S.ContentBox>
          <S.ContentBox>
            {" "}
            <S.Img src={require("../../asset/pwdchange3.png")} alt="" />
            <S.TextBox>
              <S.BulletedText>
                <S.Bulleted>
                  <VscCircleFilled />
                </S.Bulleted>
                <S.Text>
                  성공적으로 비밀번호가 변경되었다는 페이지 입니다.
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

export default Sendy;
