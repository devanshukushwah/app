import React, { useState } from "react";
import "./CardNote.css";
import TopHeader from "./components/TopHeader";
import CardsContainer from "./components/CardsContainer";

function CardNote() {
  const [isOperation, setIsOperation] = useState(true);
  return (
    <>
      <TopHeader setIsOperation={setIsOperation} isOperation={isOperation} />
      <CardsContainer isOperation={isOperation} />
    </>
  );
}

export default CardNote;
