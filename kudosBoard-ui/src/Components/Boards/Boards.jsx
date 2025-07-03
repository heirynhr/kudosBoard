import { useEffect, useState } from "react";
import "./Boards.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Boards(props) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/cards/${props.id}`);
  };


  return (
    <>
      <div className="card-tile" onClick={handleCardClick}>
        <img src={props.image} alt="img" className="card-img" />
        <h2>{props.title}</h2>
        <p>{props.category}</p>
        <button className="board-delete" onClick={(e) => {e.stopPropagation(); props.onDelete(props.id)}}> DELETE </button>
      </div>
    </>
  );
}
