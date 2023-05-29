import React from "react";
import styled from "styled-components";

function Achieve() {
  return (
    <AchieveWrap>
      <AchieveContainar></AchieveContainar>
    </AchieveWrap>
  );
}

export default Achieve;

const AchieveWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

const AchieveContainar = styled.div`
  width: 1220px;
  height: 980px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
