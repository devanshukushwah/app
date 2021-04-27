import React, { useState } from "react";
import "./CardNote.css";
import TopHeader from "./components/TopHeader";
import CardsContainer from "./components/CardsContainer";

function CardNote() {
  const [isOperation, setIsOperation] = useState(true);
  const [url, setUrl] = useState("cardnote/directory/homepage-1619422290345");

  return (
    <>
      <TopHeader
        url={url}
        setUrl={setUrl}
        setIsOperation={setIsOperation}
        isOperation={isOperation}
      />
      <CardsContainer url={url} isOperation={isOperation} setUrl={setUrl} />
    </>
  );
}

export default CardNote;
