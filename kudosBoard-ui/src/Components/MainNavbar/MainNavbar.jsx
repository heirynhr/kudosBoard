import { useState } from "react";
import "./MainNavbar.css";

function MainNavbar({ onSendData }) {
  const sendModalStatusToParent = () => {
    //This sends the data up to the parents
    // setNewBoard(!newBoard);
    onSendData(true);
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
            <button>All</button>
            <button>Recent</button>
            <button>Celebration</button>
            <button>Thank You</button>
            <button>Inspiration</button>

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
