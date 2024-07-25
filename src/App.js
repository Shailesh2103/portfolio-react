import React from "react";
import HeroSection from "./Components/Pages/HeroSection/herosection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
