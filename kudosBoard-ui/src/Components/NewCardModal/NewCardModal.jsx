import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./NewCardModal.css";

export default function CardModal({ showModal, onClose }) {
  if (!showModal) return null; // make sure a modal has been clicked
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="modal-content">
            <h2>Create a New Card</h2>
            <div className="modal-inputs">
              <div className="one-input-section">
                <p>Title:</p>
                <input type="text" className="board-input" />
              </div>
              <div className="one-input-section">
                <p>Description:</p>
                <input type="text" className="board-input" />
              </div>
              <div className="one-input-section">
                <p>GIF:</p>
                <input type="text" className="board-input" />
              </div>
              <div className="one-input-section">
                <p>GIF URL:</p>
                <input type="text" className="board-input" />
              </div>
              <div className="one-input-section">
                <p>Owner (optional):</p>
                <input type="text" className="board-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
