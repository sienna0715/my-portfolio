import React, { useEffect } from "react";
import * as S from "./ProjectStyled";
//icons
import { FiArrowRight } from "react-icons/fi";
// components
import { ReactTag, RouterTag, StyledTag, VercelTag } from "../commons/Tags";
import { Link } from "react-router-dom";

function Sendy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <S.Bar />
        <S.Title>Sendy: Web Letter Service</S.Title>
        <S.Comment>편지 웹 어플리케이션 입니다.</S.Comment>
        <S.MainImg src={require("../../asset/sendy-main.gif")} alt="sendy" />
        <S.Section>
          <S.LeftBox>
            <S.TextBox>
              <S.SubText>개발 기간</S.SubText>
              <S.Text>2023.03 ~ 2023.04</S.Text>
            </S.TextBox>
            <S.TextBox>
              <S.SubText>사용 기술</S.SubText>
              <ReactTag />
              <RouterTag />
              <StyledTag />
              <VercelTag />
            </S.TextBox>
            <S.TextBox>
              <S.SubText>보러가기</S.SubText>
              <Link to='https://www.sendy.site/'><S.Text>배포 사이트 <FiArrowRight className="arrow" /></S.Text></Link>
              <Link to='https://github.com/sienna0715/letter-service'><S.Text>GitHub Repository <FiArrowRight className="arrow" /></S.Text></Link>
            </S.TextBox>
          </S.LeftBox>
          <S.RightBox>
            <S.SubTilte>About the project</S.SubTilte>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna.
            </S.Text>
          </S.RightBox>
        </S.Section>
      </S.Container>
    </S.Wrap>
  );
}

export default Sendy;
