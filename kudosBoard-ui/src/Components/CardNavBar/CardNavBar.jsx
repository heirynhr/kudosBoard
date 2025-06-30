import "./CardNavBar.css";
import { useNavigate } from "react-router-dom";

export default function CardNavBar() {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="card-navbar">
        <h2 onClick={handleBackToHomePage} className="cardNavBar-title">
          Kudos Board
        </h2>
        <h2>THIS IS THE CARD NAVBAR</h2>
      </div>
    </>
  );
}
