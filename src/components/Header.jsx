import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header({ currentTab, setCurrentTab }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.textContent === "Portfolio") {
      setCurrentTab("Portfolio");
      navigate("/");
    } else {
      setCurrentTab("Resume");
      navigate("/resume");
    }
  };

  return (
    <HeaderWrap>
      <HeaderList onClick={handleClick}>
        {currentTab === "Portfolio" ? (
          <>
            <HeaderItem select="3px solid #000">Portfolio</HeaderItem>
            <HeaderItem>Resume</HeaderItem>
          </>
        ) : (
          <>
            <HeaderItem>Portfolio</HeaderItem>
            <HeaderItem select="3px solid #000">Resume</HeaderItem>
          </>
        )}
      </HeaderList>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 3rem 0;
`;

const HeaderList = styled.ul`
  display: flex;
  flex-direction: 2;
`;

const HeaderItem = styled.li`
  font-weight: bold;
  margin-right: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) => (props.select ? props.select : "none")};
  cursor: pointer;
`;
