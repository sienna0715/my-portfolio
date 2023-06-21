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
      <FooterContainer>
        <ContentsBox>
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
          <Img src={require("../../asset/profile.png")} alt="Lee Sion" />
          <ContactBox>
            <SubTilte>Email me</SubTilte>
            <Text>sion8120@gmail.com</Text>
            <SubTilte>Call me</SubTilte>
            <Text>010-7405-5887</Text>
          </ContactBox>
        </ContentsBox>
        <Address>ⓒ 2023 Lee Sion All rights reserved.</Address>
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
`;

const FooterContainer = styled.div`
  width: 1000px;
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    align-items: center;
  }
`;

const ContentsBox = styled.div`
  width: max-content;
  padding: 3rem;
  display: flex;
  border-bottom: 1px solid var(--color-border);
`;

const Img = styled.img`
  width: 250px;
  margin: 0 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 200px;
    margin: 0 3rem;
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

const ContactBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_30_extraBold}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_25_extraBold}
  }
`;

const SubTilte = styled.div`
  ${FONT_STYLE.title.title_16_extraBold}
  color: var(--color-gray);
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_14_extraBold}
  }
`;

const LinkIcon = styled.div`
  font-size: 3rem;
  display: flex;
  margin-top: 1.5rem;
  .tistory {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }
`;

const Text = styled.div`
  ${FONT_STYLE.title.title_16_extraBold}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE.title.title_14_extraBold}
  }
`;

const Address = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  margin: 2rem 0;
  display: flex;
  justify-content: flex-end;
  color: var(--color-border);
`;
