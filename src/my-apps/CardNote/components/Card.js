import React, { useRef, useState } from "react";
import "./css/Card.css";

function Card({ title, value }) {
  const refContainer = useRef(null);
  const [isFliped, setIsFliped] = useState(false);
  const handleClick = () => {
    if (isFliped) {
      refContainer.current.style.transform = "rotateY(0deg)";
      // refContainer.current.style.display = "none";
      setIsFliped(false);
    } else {
      refContainer.current.style.transform = "rotateY(180deg)";
      setIsFliped(true);
    }
  };
  console.log("hadsl");
  return (
    <div className="box-card">
      <div className="box-card-inner" ref={refContainer} onClick={handleClick}>
        <div className="box-card-front">{title}</div>
        <div className="box-card-back">{value}</div>
      </div>
    </div>
  );
}

export default Card;
