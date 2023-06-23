import React, { useEffect } from "react";
import * as S from "./ProjectStyled";
//icons
import { FiArrowRight } from "react-icons/fi";
// components
import {
  ReactTag,
  RouterTag,
  ScrollTag,
  StyledTag,
  VercelTag,
  ZustandTag,
} from "../commons/Tags";
import { Link } from "react-router-dom";

function Sendy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <S.Bar />
        <S.Title>Sendy</S.Title>
        <S.Comment>
          프론트엔드 3명, 백엔드 3명이 모여 제작한 온라인 편지 서비스 입니다.
        </S.Comment>
        <S.MainImg src={require("../../asset/sendy/sendy.gif")} alt="sendy" />
        <S.Section>
          <S.LeftBox>
            <S.MobileBox>
              <S.TextBox>
                <S.ContentsTitle>개발 기간</S.ContentsTitle>
                <S.ContentsText>2023.03 ~ 2023.04</S.ContentsText>
              </S.TextBox>
              <S.TextBox>
                <S.ContentsTitle>보러가기</S.ContentsTitle>
                <Link to="https://www.sendy.site/">
                  <S.ContentsText>
                    배포 사이트 <FiArrowRight className="arrow" />
                  </S.ContentsText>
                </Link>
                <Link to="https://github.com/sienna0715/letter-service">
                  <S.ContentsText>
                    GitHub Repository <FiArrowRight className="arrow" />
                  </S.ContentsText>
                </Link>
              </S.TextBox>
            </S.MobileBox>
            <S.TextBox>
              <S.ContentsTitle>사용 기술</S.ContentsTitle>
              <ReactTag />
              <RouterTag />
              <ScrollTag />
              <ZustandTag />
              <StyledTag />
              <VercelTag />
            </S.TextBox>
          </S.LeftBox>
          <S.RightBox>
            <S.SubTilte>About the project</S.SubTilte>
            <S.Text>
              '카카오톡에서 지인들에게 특별하게 메세지를 보낼 수 있는 방법이
              없을까?'에서 시작하게 된 온라인 편지 서비스 입니다. <br />
              저희가 직접 그린 편지지 테마 중 하나를 골라 원하는 글씨체로 편지를
              작성할 수 있습니다. <br />
              편지 작성이 완료되면 원하는 문구로 주소를 만들어 세상에 하나뿐인
              편지를 만들고 이미지로도 저장하여 SNS에도 쉽게 업로드할 수
              있습니다.
            </S.Text>
            <S.SubTilte>About my work</S.SubTilte>
            <S.MyWork>
              <S.ListText>
                react intersection observer를 이용한 무한 스크롤 우편함/휴지통
                페이지
              </S.ListText>
              <S.ListText>
                react hook form을 사용한 비밀번호 변경 페이지
              </S.ListText>
              <S.ListText>full page 라이브러리를 이용한 메인 페이지</S.ListText>
              <S.ListText>반응형 및 CSS 구현</S.ListText>
            </S.MyWork>
            <S.Text>
              사용자가 페이지 번호를 일일이 누르지 않아도 편지 리스트를 볼 수
              있도록 무한 스크롤을 적용하였습니다. 무한 스크롤을 구현하는 다양한
              방법 중 간편하게 적용할 수 있는 react-intersection-observer를
              선택하였습니다.
              <br />
              <br />
              특히, 수신함에서는 보낸 사람의 이름을, 발심함에서는 편지를 받을
              사람의 이름으로 편지를 검색할 수 있도록 필터링을 구현하였고, 해당
              기간에 속하는 편지만 볼 수도 있고 최신순, 오래된순, 북마크가 된
              편지만 볼 수 있는 기능을 구현하였습니다.
            </S.Text>
            <S.ImgBox>
              <S.Img
                src={require("../../asset/sendy/letterbox3.png")}
                alt="sendy"
              />
              <S.Img
                src={require("../../asset/sendy/letterbox4.png")}
                alt="sendy"
              />
            </S.ImgBox>
            <S.Text>
              마이페이지에서 비밀번호 변경은 react hook form을 이용하여
              제작하였습니다. <br />좀 더 간편하고 관리하기가 쉬운 유효성 검사
              로직을 구현하고 싶어 yup를 사용하였습니다.
            </S.Text>
            <S.ImgBox>
              <S.SmallImg
                src={require("../../asset/sendy/pwdchange1.png")}
                alt="sendy"
              />
              <S.SmallImg
                src={require("../../asset/sendy/pwdchange2.png")}
                alt="sendy"
              />
              <S.SmallImg
                src={require("../../asset/sendy/pwdchange3.png")}
                alt="sendy"
              />
            </S.ImgBox>
            <S.ListBox>
              <S.ListText>기존 비밀번호를 기입하여 인증을 합니다.</S.ListText>
              <S.ListText>
                인증이 성공하면(200 OK), 비밀번호를 변경할 수 있는 페이지로
                자동으로 넘어갑니다.
              </S.ListText>
              <S.ListText>
                확인 버튼을 누르면 성공적으로 비밀번호가 변경되며, 로그인
                페이지로 넘어가 로그인을 합니다.
              </S.ListText>
            </S.ListBox>
            <S.ImgBox>
              <S.MobileImg
                src={require("../../asset/sendy/sendy-mobile1.png")}
                alt="sendy"
              />
              <S.MobileImg
                src={require("../../asset/sendy/sendy-mobile2.png")}
                alt="sendy"
              />
              <S.MobileImg
                src={require("../../asset/sendy/sendy-mobile3.png")}
                alt="sendy"
              />
              <S.MobileImg
                src={require("../../asset/sendy/sendy-mobile4.png")}
                alt="sendy"
              />
              <S.MobileImg
                src={require("../../asset/sendy/sendy-mobile5.png")}
                alt="sendy"
              />
            </S.ImgBox>
            <S.Text>
              모바일 환경에서도 사용할 수 있도록 반응형 작업을 완료하였습니다.
            </S.Text>
            {/* <S.SubTilte>What I felt</S.SubTilte>
            <S.Text>첫 프로젝트였던 만큼 모든 것이 처음인 것들이 많았습니다. 그래서인지 많은 부족함을 느꼈고, 그만큼 더 노력 하였습니다. 본 프로젝트가 
              온전하다고 할 수는 없지만, 리팩토링을 통해 하드코딩된 부분을 효율적인 코드로 교체하고, 실패 했던 필터 영역을 성공적으로 구현하는 등 맡은 영역에 책임감을 가지고
              임하였습니다. 또한 본 프로젝트를 하며 타입 에러 문제를 자주 만나면서 타입스크립트 공부를 시작하게 된 계기가 되었습니다. 
            </S.Text> */}
          </S.RightBox>
        </S.Section>
      </S.Container>
    </S.Wrap>
  );
}

export default Sendy;
