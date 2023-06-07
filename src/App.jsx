import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Main from "./pages/Main";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";

function App() {
  return (
    <BrowserRouter>  
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

export const BREAKPOINTMOBILE = 767;
export const BREAKPOINTTABLET = 991;