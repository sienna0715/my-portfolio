import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
// components
import Card from "./commons/Card";

function Project() {
  return (
    <ProjectWrap>
      <ProjectContainar>
        <LeftBox>
          <Text>
            Take a look at the latest <br /> projects I’ve done
          </Text>
          <Card tagname="TypeScript" tagname2="Web Development" />
        </LeftBox>
        <RightBox>
          <Card tagname="React" tagname2="Web Development" />
          <Card tagname="React" tagname2="Web Development" />
        </RightBox>
      </ProjectContainar>
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
  height: 1600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-top: 12rem;
`;

const LeftBox = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${FONT_STYLE.title.title_25_extraBold}
  margin-bottom: 5rem;
`;