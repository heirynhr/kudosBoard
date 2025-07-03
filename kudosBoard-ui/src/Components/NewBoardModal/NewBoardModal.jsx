import { useState } from "react";
import axios from "axios";
import "./NewBoardModal.css";

export default function NewBoardModal({ onCloseModal }) {
  const [boardTitle, setboardTitle] = useState("");
  //this is needed to take into account the category id for the baord
  const [boardCat, setboardCat] = useState(1);
  //reminder that author can be empty
  const [boardAuthor, setboardAuthor] = useState("");

  //this will send that the modal has been closed up to the parent
  const handleCloseModal = () => {
    onCloseModal(false);
  };

    const getImg = (boardCat) => {
    if ( boardCat === 1) {
      return "https://images.pexels.com/photos/772478/pexels-photo-772478.jpeg"
    }
    if ( boardCat === 2) {
      console.log(boardCat)
      
      return "https://images.pexels.com/photos/8716181/pexels-photo-8716181.jpeg"
    }
    if (boardCat == 3){
      return "https://images.pexels.com/photos/31356615/pexels-photo-31356615.jpeg"
    }
  }

  // handles the request to make a new board
  const handleCreateBoard = async () => {
    if (!boardTitle.trim()) {
      alert("No can do. Title is required.");
      // get out of the function if necessary
      return; 
    }
    // creates the new obj needed to feed the database the board attributes
    const newBoardData = {
      title: boardTitle,
      author: boardAuthor,
      categoryId: Number(boardCat),
      coverImg: getImg(Number(boardCat)),
    };

    console.log(newBoardData.coverImg)
    console.log(newBoardData);

    try {
      // makes the request using the routes and feeds it the data
      const response = await axios.post(
        `http://localhost:3000/boards`,
        newBoardData
      );
      console.log("Brand new board has been created: ", response.data);
    } catch (err) {
      console.log(err);
    }
    handleCloseModal();
  };

  return (
    <>
      <div className="board-modal">
        <div className="board-modal-content">
          <div className="board-close-logo">
            <span onClick={handleCloseModal}>&times;</span>
          </div>
          <div className="title-header">
            <h2>Create a New Board</h2>
          </div>
          <div className="input-section">
            <div className="one-input-section">
              <p>Title:</p>
              <input
                type="text"
                className="board-input"
                value={boardTitle}
                onChange={(e) => setboardTitle(e.target.value)}
              />
            </div>
            <div className="one-input-section">
              <p> Select a Category:</p>
              <select
                value={boardCat}
                onChange={(e) => setboardCat(e.target.value)}
              >
                <option value={1}>Celebration</option>
                <option value={2}>Thank You</option>
                <option value={3}>Inspiration</option>
              </select>
            </div>
            <div className="one-input-section">
              <p>Author:</p>
              <input
                type="text"
                className="board-input"
                value={boardAuthor}
                onChange={(e) => setboardAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="board-button-container">
            <button className="board-button" onClick={handleCreateBoard}>
              Create New Board
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
