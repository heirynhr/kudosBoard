import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./CardList.css";
import Cards from "../Cards/Cards.jsx";

export default function CardList() {
  const [cards, setCards] = useState([]);

  // Fetching initial data
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cards");
        setCards(response.data);
        // setError(null);
      } catch (err) {
        setError("Error getting card information");
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <div className="card-container">
        {cards.map((m) => (
          // Looping through cards
          <Cards
            key={m.id}
            title={m.title}
            imgPath={m.poster_path}
            rating={m.vote_average}
          />
        ))}
      </div>
    </>
  );
}
