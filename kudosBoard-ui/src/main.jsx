import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar/Navbar.jsx";
import Boards from "./Boards/Boards.jsx";
import Footer from "./Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Boards />
    <Footer />
  </StrictMode>
);
