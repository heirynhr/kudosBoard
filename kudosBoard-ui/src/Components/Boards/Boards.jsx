import "./Boards.css";
import { useNavigate } from "react-router-dom";

export default function Boards() {
  const navigate = useNavigate();

  const cardInfo = {
    title: "THIS IS TITLE 1",
    description: "THIS IS DESCRIPTION 1",
  };

  const handleCardClick = () => {
    navigate("/cards");
  };

  return (
    <>
      <div className="card-tile" onClick={handleCardClick}>
        <h2>{cardInfo.title}</h2>
        <p>{cardInfo.description}</p>
      </div>
    </>
  );
}
