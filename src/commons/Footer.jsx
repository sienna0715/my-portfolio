import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>ⓒ 2023 Lee Sion All rights reserved.</FooterContainer>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const FooterContainer = styled.div`
  width: 85%;
  height: 3rem;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
