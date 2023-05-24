import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import TopButton from "./components/commons/TopButton";
// components
import Main from "./pages/Main";

function App() {

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <BrowserRouter>
        <TopButton onClick={handleClickTop} />
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

export const BREAKPOINTMOBILE = 767;
export const BREAKPOINTTABLET = 991;