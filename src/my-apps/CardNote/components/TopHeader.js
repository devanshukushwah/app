import React, { useState } from "react";
import "./css/TopHeader.css";
import AddCard from "./AddCard";
import AddFolder from "./AddFolder";

function TopHeader({ setIsOperation, isOperation }) {
  const [folder, setFolder] = useState(false);
  const [card, setCard] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const addFolder = () => {
    setIsOperation(!isOperation);
    setFolder(!folder);
    if (card) {
      setCard(false);
    }
  };
  const addCard = () => {
    setIsOperation(!isOperation);
    setCard(!card);
    if (folder) {
      setFolder(false);
    }
  };
  return (
    <>
      <header>
        <button onClick={addFolder}>Add Folder</button>
        <button onClick={addCard}>Add Card</button>
      </header>
      {folder && (
        <AddFolder title={title} setTitle={setTitle} addFolder={addFolder} />
      )}
      {card && (
        <AddCard
          title={title}
          setTitle={setTitle}
          value={value}
          setValue={setValue}
          addCard={addCard}
        />
      )}
    </>
  );
}

export default TopHeader;
