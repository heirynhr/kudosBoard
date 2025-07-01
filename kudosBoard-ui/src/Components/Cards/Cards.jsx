import "./Cards.css";

export default function Cards() {
  return (
    <>
      <div className="card-container">
        <h2 className="title">Card Title</h2>
        <h3 className="description">Card Description</h3>
        <img className="gif" src="" alt="gif" />
        <p className="author">Author</p>
        <div className="buttons">
          <button className="upvote-btn">Upvote: 5</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </>
  );
}
