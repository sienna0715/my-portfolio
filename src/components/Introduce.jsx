import React from "react";
import styled from "styled-components";

function Introduce() {
  return (
    <IntroWrap>
      <IntroContainar></IntroContainar>
    </IntroWrap>
  );
}

export default Introduce;

const IntroWrap = styled.div`
  width: 100%;
  background-color: var(--color-submain);
  display: flex;
  justify-content: center;
`;

const IntroContainar = styled.div`
  width: 1220px;
  height: 980px;
  position: relative;
  overflow: hidden;
`;
