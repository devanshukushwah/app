import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h2>Home</h2>
      <Link to="/cardnote">
        <a>cardnote</a>
      </Link>
      <br></br>
      <Link to="/colorgenerator">
        <a>colorgenerator</a>
      </Link>
    </div>
  );
}

export default Home;
