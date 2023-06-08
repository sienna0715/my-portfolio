import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
          {isContact ? (
            <Button
              background="var(--color-contact)"
              color="var(--color-white)"
              onClick={handleClickButton}
            >
              Contact
            </Button>
          ) : (
            <Button onClick={handleClickButton}>Contact</Button>
          )}
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

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-left: 3rem;
  border-radius: 10rem;
  border: none;
  background-color: ${(props) =>
    props.background ? props.background : "var(--color-white)"};
  color: ${(props) => (props.color ? props.color : "var(--color-main)")};
  cursor: pointer;
`;
