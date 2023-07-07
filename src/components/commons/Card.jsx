import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../../style/fontStyle";

function Card({ tagname, tagname2, title, subtitle, children }) {
  return (
    <CardContainer>
      <TagBox>
        <Tag>{tagname}</Tag>
        <Tag>{tagname2}</Tag>
      </TagBox>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <ImgBox>{children}</ImgBox>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  background-color: var(--color-main);
  color: var(--color-white);
  width: 500px;
  height: 600px;
  border-radius: 2rem;
  transition: 0.5s;
  overflow: hidden;
  &:nth-child(1) {
    margin-bottom: 5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const TagBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Tag = styled.span`
  background-color: var(--color-submain);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  margin-right: 0.8rem;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_30_bold}
  margin-top: 2rem;
  padding: 0 2rem;
`;

const SubTitle = styled.div`
  ${FONT_STYLE.text.text_15_medium}
  padding: 1rem 2rem;
`;

const ImgBox = styled.div`
  width: 100%;
`;
