import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Sendy from "./components/project/Sendy";
import styled from "styled-components";
// import Todo from "./components/project/Todo";

function App() {

  return (
    <BrowserRouter>
      <Wrap>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sendy" element={<Sendy />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
        </Routes>
        <Footer />
      </Wrap>
    </BrowserRouter>
  );
}

export default App;

const Wrap = styled.div`
  position: relative;
`;
