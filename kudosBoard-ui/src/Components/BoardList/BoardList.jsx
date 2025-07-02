import "./BoardList.css";
import axios from "axios";
import Boards from "../Boards/Boards";
import { useState, useEffect } from "react";

export default function BoardList({ sortOption }) {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        if (sortOption.toLowerCase() === "recent") {
          const { data } = await axios.get(
            `http://localhost:3000/boards?sort=${sortOption}`
          );
          setBoardData(data);
        } else if (sortOption.toLowerCase() === "all") {
          const { data } = await axios.get(`http://localhost:3000/boards`);
          setBoardData(data);
        } else if (sortOption === "Thank You") {
          const { data } = await axios.get(
            `http://localhost:3000/boards?category=thank-you`
          );
          setBoardData(data);
        } else {
          const { data } = await axios.get(
            `http://localhost:3000/boards?category=${sortOption}`
          );
          setBoardData(data);
        }

        // console.log(sortOption);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoardData();
  }, [sortOption]);

  // const handleSortOption = (sortOption) => {
  //   console.log(sortOption);
  // };

  return (
    <>
      <div className="board-list-container">
        {boardData.map((boards) => {
          return (
            <div key={boards.boardId}>
              <Boards
                id={boards.boardId}
                image={boards.coverImg}
                title={boards.title}
                category={boards.category.catKey}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
