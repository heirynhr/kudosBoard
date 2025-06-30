import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/MainNavbar/MainNavbar.jsx";
import Boards from "./Components/Boards/Boards.jsx";
import Footer from "./Components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Boards />
    <Footer />
  </StrictMode>
);
