import React from "react";
import styled from "styled-components";
import { FONT_STYLE } from "../style/fontStyle";
import { Link } from "react-router-dom";
// components
import Card from "../components/commons/Card";
import { BREAKPOINTTABLET } from "../breakpoint";

function Portfolio() {
  return (
    <PortfolioWrap>
      <PortfolioContainer>
        <TilteBox>
          <Bar />
          <Title>Portfolio</Title>
        </TilteBox>
        <ProjectBox>
          <LeftBox>
            <Link to="/sendy">
              <Card tagname="React" tagname2="Web Development" title="Sendy" subtitle="온라인 편지 서비스">
                <Img src={require("../asset/sendy/sendy.png")} alt="sendy" />
              </Card>
            </Link>
            <Card tagname="React" tagname2="Web Development" />
          </LeftBox>
          <RightBox>
            <Card tagname="TypeScript" tagname2="Web Development" />
            <Card tagname="React" tagname2="Web Development" />
          </RightBox>
        </ProjectBox>
      </PortfolioContainer>
    </PortfolioWrap>
  );
}

export default Portfolio;

const PortfolioWrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

const PortfolioContainer = styled.div`
  width: 1220px;
  height: 1800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    height: max-content;
  }
`;

const TilteBox = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    flex-direction: column;
  }
`;

const Bar = styled.div`
  width: 10rem;
  height: 0.5rem;
  background-color: var(--color-white);
`;

const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin: 3rem 0;
  text-align: right;
`;

const LeftBox = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 0;
    margin-bottom: 5rem;
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-bottom: 5rem;
  }
`;

const Img = styled.img`
  width: 155%;
  transform: rotate(-20deg);
  margin-left: -2rem;
`;