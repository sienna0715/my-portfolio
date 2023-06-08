import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../../style/fontStyle";
import { Link } from "react-router-dom";
// icons
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function Contact({ modalRef }) {
  return (
    <ContactContainar ref={modalRef}>
      <ContactBox>
        <Tilte>이시온 | LEE SI ON</Tilte>
        <Position>FrontEnd Developer</Position>
        <Text>
          <BiPhoneCall className="icon" /> sion8120@gmail.com
        </Text>
        <Text>
          <AiOutlineMail className="icon" /> 010-7405-5887
        </Text>
        <LinkIcon>
          <Link to="https://github.com/sienna0715">
            <BsGithub />
          </Link>
          <Link to="https://seven-day-five.tistory.com/">
            <SiTistory className="tistory" />
          </Link>
        </LinkIcon>
      </ContactBox>
    </ContactContainar>
  );
}

export default Contact;

const ContactContainar = styled.div`
  background-color: var(--color-border);
  width: 500px;
  height: 300px;
  border-radius: 1rem;
  position: absolute;
  top: 100px;
  right: 90px;
  z-index: 9999999;
`;

const ContactBox = styled.div`
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
`;

const Tilte = styled.div`
  ${FONT_STYLE.title.title_16_extraBold}
`;

const Text = styled.div`
  ${FONT_STYLE.title.title_12_extraBold}
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 0.5rem;
  }
`;

const Position = styled.div`
  ${FONT_STYLE.title.title_10_extraBold}
  margin-bottom: 2rem;
`;

const LinkIcon = styled.div`
  font-size: 2.5rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  .tistory {
    margin-left: 1.5rem;
    font-size: 2rem;
  }
`;
