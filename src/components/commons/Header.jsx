import React from "react";
import styled from "styled-components";

const Menus = ["Home", "About", "Portfolio"];

function Header() {
  return (
    <HeaderWrap>
      <HeaderContainar>
        <Logo src={require("../../asset/logo.png")} alt="logo" />
        <HeaderBox>
          <MenuList>
            {Menus.map((menu, idx) => (
              <MenuItem className="select" key={idx}>
                {menu}
              </MenuItem>
            ))}
          </MenuList>
          <Button>Contact</Button>
        </HeaderBox>
      </HeaderContainar>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

const HeaderContainar = styled.div`
  width: 1220px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  &:hover {
    color: var(--color-gray);
  }
`;

const MenuItem = styled.li`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 3rem;
  cursor: pointer;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  &:hover {
    color: var(--color-white);
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-left: 3rem;
  border-radius: 10rem;
  border: none;
  background-color: var(--color-white);
  cursor: pointer;
`;
