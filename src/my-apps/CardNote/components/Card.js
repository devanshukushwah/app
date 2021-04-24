import React from "react";
import "./css/Card.css";

function Card({ title, value }) {
  return (
    <div className="box-card">
      <h4>{title}</h4>
      <h4>{value}</h4>
    </div>
  );
}

export default Card;
