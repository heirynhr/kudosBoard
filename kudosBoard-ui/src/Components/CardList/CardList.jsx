import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardList.css";
import Cards from "../Cards/Cards.jsx";

export default function CardList() {
  const { boardId } = useParams();
  const [cards, setCards] = useState([]);

  // Fetching initial data
  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/cards/${boardId}`
  //       );
  //       setCards(response.data);
  //       // setError(null);
  //     } catch (err) {
  //       setError("Error getting card information");
  //     }
  //   };
  //   fetchCards();
  // }, []);

  setCards([
    {
      title: "THIS IS TITLE 1",
      description: "a description",
      img: "",
      author: "AUTHOR",
      likes: 6,
    },
  ]);

  return (
    <>
      <div className="card-container">
        {cards.map((c) => (
          // Looping through cards
          <Cards
            title={c.title}
            description={c.description}
            gif={c.gif}
            author={c.author}
            likes={c.likes}
          />
        ))}
      </div>
    </>
  );
}
