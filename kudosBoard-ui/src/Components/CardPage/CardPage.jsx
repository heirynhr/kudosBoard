import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import CardList from "../CardList/CardList.jsx";
import CardNavBar from "../CardNavBar/CardNavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import NewCardModal from "../NewCardModal/NewCardModal.jsx";

export default function CardPage() {
  const { boardId } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    console.log("Showing Modal: true");
  };

  // Close Modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <CardNavBar setShowModal={handleShowModal} />
        <CardList boardId={boardId} />
        <Footer />
      </div>
      <NewCardModal showModal={showModal} onClose={handleClose} />
    </>
  );
}
