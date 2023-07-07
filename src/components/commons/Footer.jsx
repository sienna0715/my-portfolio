import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../../style/fontStyle";
import { Link } from "react-router-dom";
import { BREAKPOINTTABLET } from "../../breakpoint";
//icons
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <FooterWrap>
      <Address>ⓒ 2023 Lee Sion All rights reserved.</Address>
      <FooterContainer>
        <ContentsBox>
          <Img src={require("../../asset/profile.png")} alt="Lee Sion" />
          <ProfileBox>
            <Title>LEE SI ON</Title>
            <SubTilte>Frontend Developer</SubTilte>
            <LinkIcon>
              <Link to="https://github.com/sienna0715">
                <BsGithub />
              </Link>
              <Link to="https://seven-day-five.tistory.com/">
                <SiTistory className="tistory" />
              </Link>
            </LinkIcon>
          </ProfileBox>
          <Bar />
          <ContactBox>
            <SubTilte>Email me</SubTilte>
            <Text>sion8120@gmail.com</Text>
            <SubTilte>Call me</SubTilte>
            <Text>010-7405-5887</Text>
          </ContactBox>
        </ContentsBox>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  border-top: 1px solid var(--color-gray);
  display: flex;
  justify-content: center;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 1220px;
  height: 320px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-white);
`;

const Img = styled.img`
  width: 200px;
  margin-right: 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: none;
  }
`;

const ProfileBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  line-height: 1.5;
`;

const Bar = styled.div`
  width: 15%;
  height: 0.2rem;
  transform: rotate(-70deg);
  background-color: var(--color-gray);
`;

const ContactBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_25_bold}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_20_bold}
  }
`;

const SubTilte = styled.div`
  ${FONT_STYLE.title.title_14_bold}
  color: var(--color-gray);
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_12_bold}
  }
`;

const LinkIcon = styled.div`
  a {
    color: var(--color-white);
  }
  font-size: 3rem;
  display: flex;
  margin-top: 1.5rem;
  .tistory {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.div`
  ${FONT_STYLE.title.title_14_bold}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_12_bold}
  }
`;

const Address = styled.div`
  ${FONT_STYLE.text.text_9_medium}
  color: var(--color-gray);
  width: 290px;
  height: max-content;
  transform: rotate(90deg);
  position: absolute;
  top: 10rem;
  left: -8rem;
`;
