import { useState } from "react";
import "./MainNavbar.css";

function MainNavbar({ onSendData, onSortOption }) {
  const sendModalStatusToParent = () => {
    //This sends the data up to the parents
    // setNewBoard(!newBoard);
    onSendData(true);
  };

  const handleSort = (event) => {
    //THIS WILL GIVE YOU THE VALUE OR SORT OPTION OF THE BUTTON
    const sortOption = event.target.textContent;

    // const sortThank
    if (event.target.textContent === "Thank You") {
      console.log("Thank you was called");
    }
    onSortOption(sortOption);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="main-title">Kudos Board</h1>
        <div className="right-side-navbar">
          <div className="search-bar-container">
            <input type="text" className="search-bar" />
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="sorting-area">
            <button className="sorting-btn" onClick={handleSort}>
              All
            </button>
            <button className="sorting-btn" onClick={handleSort}>
              Recent
            </button>
            <button className="sorting-btn" onClick={handleSort}>
              Celebration
            </button>
            <button className="sorting-btn" onClick={handleSort}>
              Thank You
            </button>
            <button className="sorting-btn" onClick={handleSort}>
              Inspiration
            </button>

            <button onClick={sendModalStatusToParent}>
              Create a New Board
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
