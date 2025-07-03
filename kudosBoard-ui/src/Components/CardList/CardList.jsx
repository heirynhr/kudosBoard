import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./CardList.css";
import Cards from "../Cards/Cards.jsx";

export default function CardList({ boardId, newCard, setNewCard }) {
  const [cards, setCards] = useState([]);

  // Fetching initial data
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/cards/${boardId}`
        );
        setCards(response.data);
        console.log(response.data);
        // setError(null);
      } catch (err) {
        // setError("Error getting card information");
        console.error("Error fetching list: ", err);
      }
    };
    fetchCards();
    setNewCard(false);
  }, [boardId, newCard]);

  const handleCardDelete = async (cardId) => {
    try {
      // makes the request using the routes and feeds it the data
      const response = await axios.delete(
        `http://localhost:3000/cards/${cardId}`
      );
      alert("Card has been successfully DELETED!");

      // need to make sure that the boardlist reloads and fetches the updated database
      const updatedCards = cards.filter((card) => {
        return card.cardId !== cardId;
      });
      // need to update the new list
      setCards(updatedCards);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card-list-container">
        {cards.map((c) => (
          // Looping through cards
          <Cards
            key={c.cardId}
            cardId={c.cardId}
            title={c.title}
            description={c.description}
            gif={c.cardImg}
            author={c.author}
            likes={c.likes}
            handleCardDelete={handleCardDelete}
          />
        ))}
      </div>
    </>
  );
}
