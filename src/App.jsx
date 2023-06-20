import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Sendy from "./components/project/Sendy";
import Contact from "./components/commons/Contact";
import styled from "styled-components";
// import StackUp from "./components/project/StackUp";
// import Todo from "./components/project/Todo";

function App() {
  const [isContact, setIsContact] = useState(false);
  const modalRef = useRef();

  const handleModal = (e) => {
    if (isContact && !modalRef.current.contains(e.target)) {
      setIsContact(false);
    }
  };

  return (
    <BrowserRouter>
      <Wrap onClick={handleModal}>
        <Header isContact={isContact} setIsContact={setIsContact} />
        {isContact ? <Contact modalRef={modalRef} /> : <></>}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sendy" element={<Sendy />} />
          {/* <Route path="/stackup" element={<StackUp />} /> */}
          {/* <Route path="/todo" element={<Todo />} /> */}
        </Routes>
        <Footer />
      </Wrap>
    </BrowserRouter>
  );
}

export default App;

export const BREAKPOINTMOBILE = 767;
export const BREAKPOINTTABLET = 991;

const Wrap = styled.div`
  position: relative;
`;
