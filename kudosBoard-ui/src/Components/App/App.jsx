import "./App.css";

// import Navbar from "./Components/MainNavbar/MainNavbar.jsx";
// import Boards from "../Components/Boards/Boards.jsx";
// import Footer from "../Components/Footer/Footer.jsx";

import Boards from "../Boards/Boards.jsx";
import Footer from "../Footer/Footer.jsx";
import MainNavbar from "../MainNavbar/MainNavbar.jsx";

export default function App() {
  return (
    <div>
      <MainNavbar />
      <Boards />
      <Footer />
    </div>
  );
}
