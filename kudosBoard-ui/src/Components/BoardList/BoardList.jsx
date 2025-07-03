import "./BoardList.css";
import axios from "axios";
import Boards from "../Boards/Boards";
import { useState, useEffect } from "react";

export default function BoardList({ sortOption, searchInput }) {
  const [boardData, setBoardData] = useState([]);
  const [displayedBoards, setDisplayedBoards] = useState([]);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        if (sortOption.toLowerCase() === "recent") {
          const { data } = await axios.get(
            `http://localhost:3000/boards?sort=${sortOption.toLowerCase()}`
          );
          setBoardData(data);
          setDisplayedBoards(data);
        } else if (sortOption.toLowerCase() === "all") {
          const { data } = await axios.get(`http://localhost:3000/boards`);
          setBoardData(data);
          setDisplayedBoards(data);
        } else if (sortOption === "Thank You") {
          const { data } = await axios.get(
            `http://localhost:3000/boards?category=thank-you`
          );
          setBoardData(data);
          setDisplayedBoards(data);
        } else {
          const { data } = await axios.get(
            `http://localhost:3000/boards?category=${sortOption.toLowerCase()}`
          );
          setBoardData(data);
          setDisplayedBoards(data);
        }

        // console.log(sortOption);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoardData();
  }, [sortOption]);

  //HERE IS THE SEARCH INPUT
  useEffect(() => {
    const searchedData = boardData.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchInput === "") {
      const fetchClear = async () => {
        const { data } = await axios.get("http://localhost:3000/boards");
        setDisplayedBoards(data);
      };
      fetchClear();
    } else {
      setDisplayedBoards(searchedData);
    }
    console.log(searchedData);
  }, [searchInput]);

  return (
    <>
      <div className="board-list-container">
        {displayedBoards.map((boards) => {
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
