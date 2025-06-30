import "./Boards.css";

export default function Boards() {
  const cardInfo = {
    title: "THIS IS TITLE 1",
    description: "THIS IS DESCRIPTION 1",
  };

  return (
    <>
      <div className="card-container">
        <h2>{cardInfo.title}</h2>
        <p>{cardInfo.description}</p>
      </div>
    </>
  );
}
