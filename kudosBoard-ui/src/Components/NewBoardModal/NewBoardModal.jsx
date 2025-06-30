import "./NewBoardModal.css";

export default function NewBoardModal({ onCloseModal }) {
  //this will send that the modal has been closed up to the parent
  const handleCloseModal = () => {
    onCloseModal(false);
  };

  return (
    <>
      <div className="board-modal">
        <div className="board-modal-content">
          <div className="board-close-logo">
            <span onClick={handleCloseModal}>&times;</span>
          </div>
          <div className="title-header">
            <h2>Create a New Board</h2>
          </div>
          <div className="input-section">
            <div className="one-input-section">
              <p>Title:</p>
              <input type="text" className="board-input" />
            </div>
            <div className="one-input-section">
              <p>Category:</p>
              <input type="text" className="board-input" />
            </div>
            <div className="one-input-section">
              <p>Author:</p>
              <input type="text" className="board-input" />
            </div>
          </div>

          <div className="board-button-container">
            <button className="board-button">Create New Board</button>
          </div>
        </div>
      </div>
    </>
  );
}
