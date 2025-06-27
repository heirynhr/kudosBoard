import { useState } from "react";
import "./Navbar.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <h1>Kudos Board</h1>
        <div className="right-side-navbar">
          <input type="text" placeholder="SEARCH HERE" className="search-bar" />
          <div className="sorting-area">
            <button>All</button>
            <button>Recent</button>
            <button>Celebration</button>
            <button>Thank You</button>
            <button>Inspiration</button>
            <button>Create a New Board</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
