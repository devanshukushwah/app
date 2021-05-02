import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h2>Home</h2>
      <Link to="/cardnote">cardnote</Link>
      <br></br>
      <Link to="/colorgenerator">colorgenerator</Link>
    </div>
  );
}

export default Home;
