import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Resume from "./components/Resume";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [currentTab, setCurrentTab] = useState("Portfolio");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BodyWrap>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Routes>
          <Route
            path="/portfolio"
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
