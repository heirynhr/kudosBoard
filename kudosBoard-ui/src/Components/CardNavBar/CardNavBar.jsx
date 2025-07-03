import "./CardNavBar.css";
import { useNavigate } from "react-router-dom";

export default function CardNavBar({ setShowModal }) {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    navigate("/");
  };

  const handleNewCardModal = () => {
    console.log("This is the new CARD MODAL");
    setShowModal(true);
  };

  return (
    <>
      <div className="card-navbar">
        <h2 onClick={handleBackToHomePage} className="cardNavBar-title">
          Kudos Board
        </h2>

        <button onClick={handleNewCardModal}>Create a Card</button>

        {/* <h2>THIS IS THE CARD NAVBAR</h2> */}
      </div>
    </>
  );
}
