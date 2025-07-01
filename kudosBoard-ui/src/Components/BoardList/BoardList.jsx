import "./BoardList.css";
import axios from "axios";
import Boards from "../Boards/Boards";
import { useState, useEffect } from "react";

export default function BoardList() {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/boards");

        setBoardData(data);
        console.log("THE BOARD DATA HAS RAN", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoardData();
  }, []);

  return (
    <>
      <div className="board-list-container">
        {boardData.map((boards) => {
          return (
            <div>
              <Boards
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
