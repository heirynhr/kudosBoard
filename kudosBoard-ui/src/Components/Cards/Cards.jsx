import { useState } from "react";
import axios from "axios";
import "./Cards.css";

export default function Cards({
  cardId,
  title,
  description,
  gif,
  author,
  likes,
  handleCardDelete,
}) {
  const [localLikes, setLocalLikes] = useState(likes);

  const handleUpvote = async () => {
    try {
      const newLikes = localLikes + 1;

      const response = await axios.put(
        `http://localhost:3000/cards/${cardId}`,
        {
          likes: newLikes,
        }
      );

      if (response.data && response.data.likes !== undefined) {
        setLocalLikes(response.data.likes);
      } else {
        setLocalLikes(newLikes); // fallback in case backend doesn't return updated likes
      }
    } catch (err) {
      console.error("Failed to update likes:", err);
    }
  };

  return (
    <>
      <div className="card-container">
        <img className="gif" src={gif} alt="gif" />
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
        <p className="author">{author}</p>
        <div className="buttons">
          <button className="upvote-btn" onClick={handleUpvote}>
            Upvote: {localLikes}
          </button>
          <button
            className="delete-btn"
            onClick={() => handleCardDelete(Number(cardId))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
