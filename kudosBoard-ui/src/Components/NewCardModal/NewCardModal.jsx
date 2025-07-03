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
  const apiKey = import.meta.env.VITE_GIF_API_KEY;
  const [gifs, setGifs] = useState([]);
  const [gifURL, setGifURL] = useState("");
  const [searchGif, setSearchGif] = useState("");

  console.log(searchGif);

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

  // useEffect(() => {
  //   console.log("THE GIF PART RAN");
  //   const gif = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=8`
  //       );
  //       setGifs(data.data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   gif();
  // }, [showModal]);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        if (searchGif === "") {
          const { data } = await axios.get(
            `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=8`
          );
          setGifs(data.data);
        } else {
          const { data } = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchGif}&limit=8`
          );
          setGifs(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchGifs();
  }, [searchGif, showModal]);

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

  const getURL = (data) => {
    console.log(data.images.fixed_height.url);
    setGifURL(data.images.fixed_height.url);

    setUserInfo((u) => ({ ...u, cardImg: data.images.fixed_height.url }));
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
                  value={searchGif}
                  onChange={(e) => {
                    setUserInfo((u) => ({ ...u, searchGIF: e.target.value }));
                    setSearchGif(e.target.value);
                  }}
                />
                <div className="gif-container">
                  {gifs.map((gif) => {
                    return (
                      <div key={gif.id} className="gif-card">
                        <img
                          src={gif.images.fixed_height.url}
                          alt="gif"
                          className="gif-img"
                          onClick={() => getURL(gif)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="one-input-section">
                <p>GIF URL:</p>
                <input
                  type="text"
                  className="board-input"
                  onChange={(e) =>
                    setUserInfo((u) => ({ ...u, cardImg: e.target.value }))
                  }
                  value={gifURL}
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
