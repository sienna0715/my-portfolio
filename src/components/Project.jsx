import React from "react";
import styled from "styled-components";

function Project() {
  return (
    <ProjectWrap>
      <ProjectContainar></ProjectContainar>
    </ProjectWrap>
  );
}

export default Project;

const ProjectWrap = styled.div`
  width: 100%;
  background-color: var(--color-submain);
  display: flex;
  justify-content: center;
`;

const ProjectContainar = styled.div`
  width: 1220px;
  height: 1860px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
