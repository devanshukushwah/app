import React from "react";
import "./css/DirectoryBar.css";
import {
  AiFillFolderAdd,
  AiFillFileAdd,
  AiFillDelete,
  AiFillAppstore,
} from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
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
  } = useGlobalContext();

  const handleFolder = () => {
    openModal("folder");
  };
  const handleCard = () => {
    openModal("card");
  };
  const handleDeleteIn = () => {
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
              <AiFillFolderAdd /> <p>Add Folder</p>
            </button>
            <button className="dir-btn" onClick={handleCard}>
              <AiFillFileAdd /> <p>Add Card</p>
            </button>
          </>
        )}

        <button
          className={`dir-btn ${isDeleteOn && "selected"}`}
          onClick={handleDeleteIn}
        >
          <AiFillDelete /> <p>Delete</p>
        </button>
      </section>
    </>
  );
}

export default DirectoryBar;
