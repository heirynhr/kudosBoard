import "./Boards.css";
import { useNavigate } from "react-router-dom";

export default function Boards() {
  const navigate = useNavigate();

  const cardInfo = {
    img: "",
    title: "THIS IS TITLE 1",
    category: "THIS IS CATEGORY",
  };

  const handleCardClick = () => {
    navigate("/cards");
  };

  return (
    <>
      <div className="card-tile" onClick={handleCardClick}>
        <img src={cardInfo.img} alt="img" />
        <h2>{cardInfo.title}</h2>
        <p>{cardInfo.category}</p>
      </div>
    </>
  );
}
