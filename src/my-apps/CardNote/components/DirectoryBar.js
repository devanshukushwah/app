import React from "react";
import "./css/DirectoryBar.css";
import {
  AiFillFolderAdd,
  AiFillFileAdd,
  AiFillDelete,
  AiFillAppstore,
} from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { MdRestore } from "react-icons/md";
import { useGlobalContext } from "../context/context";
function DirectoryBar() {
  const {
    openModal,
    isDeleteOn,
    setIsDeleteOn,
    deleteItem,
    isSelectAllOn,
    setIsSelectAllOn,
    handleDelete,
    folders,
    cards,
    isRecycleBin,
  } = useGlobalContext();

  const handleFolder = () => {
    openModal("folder");
  };
  const handleCard = () => {
    openModal("card");
  };
  const handleDeleteIn = () => {
    const bothSum = folders.length + cards.length;
    if (bothSum === 0) return;
    setIsDeleteOn(!isDeleteOn);
  };
  const handleSelectIn = () => {
    setIsSelectAllOn(!isSelectAllOn);
    handleDelete(null, null, true);
  };

  return (
    <>
      <section className="directory-bar">
        {isDeleteOn ? (
          <>
            <button
              className={`dir-btn ${isSelectAllOn && "selected"}`}
              onClick={handleSelectIn}
            >
              <AiFillAppstore /> <p>Select All</p>
            </button>
            <button className="dir-btn" onClick={deleteItem}>
              <GiConfirmed /> <p>Confirm</p>
            </button>
          </>
        ) : (
          <>
            <button className="dir-btn" onClick={handleFolder}>
              <AiFillFolderAdd />{" "}
              <p>
                <p>Add </p>Folder
              </p>
            </button>
            <button className="dir-btn" onClick={handleCard}>
              <AiFillFileAdd />{" "}
              <p>
                <p>Add </p> Card
              </p>
            </button>
          </>
        )}
        {isRecycleBin ? (
          <button
            className={`dir-btn ${isDeleteOn && "selected"}`}
            onClick={handleDeleteIn}
          >
            <MdRestore /> <p>Restore</p>
          </button>
        ) : (
          <button
            className={`dir-btn ${isDeleteOn && "selected"}`}
            onClick={handleDeleteIn}
          >
            <AiFillDelete /> <p>Delete</p>
          </button>
        )}
      </section>
    </>
  );
}

export default DirectoryBar;
