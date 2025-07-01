import "./Cards.css";

export default function Cards({ title, description, gif, author, likes }) {
  return (
    <>
      <div className="card-container">
        <img className="gif" src={gif} alt="gif" />
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
        <p className="author">{author}</p>
        <div className="buttons">
          <button className="upvote-btn">Upvote: {likes}</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </>
  );
}
