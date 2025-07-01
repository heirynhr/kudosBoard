import { useEffect, useState } from "react";
import "./Boards.css";
import { useNavigate } from "react-router-dom";

export default function Boards(props) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/cards");
  };

  return (
    <>
      <div className="card-tile" onClick={handleCardClick}>
        <img src={props.image} alt="img" />
        <h2>{props.title}</h2>
        <p>{props.category}</p>
      </div>
    </>
  );
}
