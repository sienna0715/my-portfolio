import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

function TopButton() {
  return (
    <Top>
      <AiOutlineArrowUp />
    </Top>
  );
}

export default TopButton;

const Top = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: var(--color-point);
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
`;
