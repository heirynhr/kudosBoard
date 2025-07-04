import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../Footer/Footer.jsx";
import MainNavbar from "../MainNavbar/MainNavbar.jsx";
import NewBoardModal from "../NewBoardModal/NewBoardModal.jsx";
import BoardList from "../BoardList/BoardList.jsx";
import { useState } from "react";

export default function Home() {
  const [handleModalOpen, setHandleModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [newBoard, setNewBoard] = useState(false);

  const handleDataFromChild = (openModalStatus) => {
    setHandleModalOpen(openModalStatus);
    console.log("The data from child is ", openModalStatus);
  };

  const handleSortOption = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleSearch = (searchData) => {
    setSearchInput(searchData);
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  return (
    <div>
      <MainNavbar
        onSendData={handleDataFromChild}
        onSortOption={handleSortOption}
        onSearchData={handleSearch}
        onClearSearch={clearSearch}
      />
      <BoardList
        sortOption={sortOption}
        searchInput={searchInput}
        newBoard={newBoard}
        setNewBoard={setNewBoard}
      />
      {handleModalOpen && (
        <NewBoardModal
          onCloseModal={handleDataFromChild}
          setNewBoard={setNewBoard}
        />
      )}
      <Footer />
    </div>
  );
}
