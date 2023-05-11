import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Resume from "./components/Resume";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [currentTab, setCurrentTab] = useState("Portfolio");

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <BrowserRouter>
      <BodyWrap>
        <Top onClick={handleClickTop}>
          <AiOutlineArrowUp />
        </Top>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume currentTab={currentTab} setCurrentTab={setCurrentTab} />
            }
          />
        </Routes>
      </BodyWrap>
    </BrowserRouter>
  );
}

export default App;

const BodyWrap = styled.div`
  width: 1000px;
  height: 100%;
  background-color: #fff;
`;

const Top = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #fff;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    background-color: #242323;
    color: #fff;
  }
`;
