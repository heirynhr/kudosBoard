import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./Components/Home/Home.jsx";
import CardPage from "./Components/CardPage/CardPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:boardId" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
