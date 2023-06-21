import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
// components
import Tags from "./commons/Tags";

function Stack() {
  return (
    <StackWrap>
      <StackContainar>
        <Title>STACK</Title>
        <Tags />
      </StackContainar>
    </StackWrap>
  );
}

export default Stack;

const StackWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

const StackContainar = styled.div`
  width: 1220px;
  height: 980px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;