import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./NewCardModal.css";

export default function NewCardModal({
  showModal,
  onClose,
  boardId,
  setNewCard,
}) {
  console.log("NewCardModal boardId prop:", boardId);
  const [userInfo, setUserInfo] = useState({
    boardId: null,
    title: "",
    description: "",
    searchGIF: "",
    cardImg: "",
    author: "",
    likes: 0,
  });

  useEffect(() => {
    setUserInfo((u) => ({ ...u, boardId: Number(boardId) }));
  }, [boardId]);

  const handleSubmit = async () => {
    console.log("boardId: ", boardId);
    console.log("userInfo: ", userInfo);
    try {
      // makes the request using the routes and feeds it the data
      const response = await axios.post(
        `http://localhost:3000/cards`,
        userInfo
      );
      console.log("Brand new card has been created: ", response.data);
    } catch (err) {
      console.error(err);
    }
    onClose();
    setNewCard(true);
  };

  if (!showModal) return null; // make sure a modal has been clicked
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="modal-content">
            <h2>Create a New Card</h2>
            <div className="modal-inputs">
              <div className="one-input-section">
                <p>Title:</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, title: e.target.value }))
                  }
                />
              </div>
              <div className="one-input-section">
                <p>Description:</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, description: e.target.value }))
                  }
                />
              </div>
              <div className="one-input-section">
                <p>Search GIF:</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, searchGIF: e.target.value }))
                  }
                />
              </div>
              <div className="one-input-section">
                <p>GIF URL:</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, cardImg: e.target.value }))
                  }
                />
              </div>
              <div className="one-input-section">
                <p>Owner (optional):</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, author: e.target.value }))
                  }
                />
              </div>
              <button className="create-btn" onClick={handleSubmit}>
                Create Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
