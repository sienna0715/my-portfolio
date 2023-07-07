import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTTABLET } from "../../breakpoint";

function Header({ isContact, setIsContact }) {
  const handleClickButton = () => {
    setIsContact(!isContact);
  };

  return (
    <HeaderWrap>
      <HeaderContainar>
        <Link to="/">
          <Logo src={require("../../asset/logo.png")} alt="logo" />
        </Link>
        <HeaderBox>
          <MenuList>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/portfolio">Portfolio</Link>
            </MenuItem>
          </MenuList>
        </HeaderBox>
      </HeaderContainar>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
`;

const HeaderContainar = styled.div`
  width: 1220px;
  height: 100%;
  padding: 0 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 10rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const MenuItem = styled.li`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 3rem;
  cursor: pointer;
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;
