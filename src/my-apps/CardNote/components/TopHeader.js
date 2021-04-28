import React, { useState } from "react";
import "./css/TopHeader.css";
import AddCard from "./AddCard";
import AddFolder from "./AddFolder";
import { FaFolderPlus, FaPlus, FaTrash } from "react-icons/fa";
import firebase from "../utils/firebase";

function TopHeader({ setIsOperation, isOperation, url, setUrl }) {
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
  const deleteBox = () => {
    setIsOperation(!isOperation);
    const ref = firebase.database().ref("cardnote/");
    // const id = "-MZ8ZPO_u-DV2NGWndDU";
    ref
      // .child(id)
      .remove()
      .then(function () {
        console.log("Remove succeeded.");
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message);
      });
  };
  return (
    <>
      <header>
        <button onClick={addFolder}>
          <FaFolderPlus /> <p>Folder</p>
        </button>
        <button onClick={addCard}>
          <FaPlus />
          <p>Card</p>
        </button>
        <button onClick={deleteBox}>
          <FaTrash />
          <p>Delete</p>
        </button>
      </header>
      {folder && (
        <AddFolder
          setUrl={setUrl}
          url={url}
          title={title}
          setTitle={setTitle}
          addFolder={addFolder}
          setIsOperation={setIsOperation}
          isOperation={isOperation}
        />
      )}
      {card && (
        <AddCard
          url={url}
          title={title}
          setTitle={setTitle}
          value={value}
          setValue={setValue}
          addCard={addCard}
          setIsOperation={setIsOperation}
          isOperation={isOperation}
        />
      )}
    </>
  );
}

export default TopHeader;
