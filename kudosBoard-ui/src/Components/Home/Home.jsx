import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Boards from "../Boards/Boards.jsx";
import Footer from "../Footer/Footer.jsx";
import MainNavbar from "../MainNavbar/MainNavbar.jsx";
import NewBoardModal from "../NewBoardModal/NewBoardModal.jsx";
import BoardList from "../BoardList/BoardList.jsx";
import { useState } from "react";

export default function Home() {
  const [handleModalOpen, setHandleModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const handleDataFromChild = (openModalStatus) => {
    setHandleModalOpen(openModalStatus);
    console.log("The data from child is ", openModalStatus);
  };

  const handleSortOption = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <div>
      <MainNavbar
        onSendData={handleDataFromChild}
        onSortOption={handleSortOption}
      />
      <BoardList sortOption={sortOption} />
      {handleModalOpen && <NewBoardModal onCloseModal={handleDataFromChild} />}
      <Footer />
    </div>
  );
}
