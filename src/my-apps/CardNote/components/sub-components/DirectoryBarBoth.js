import React, { useState } from "react";
import {
  AiFillFolderAdd,
  AiFillFileAdd,
  AiFillDelete,
  AiFillAppstore,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { MdRestore } from "react-icons/md";
import { useGlobalContext } from "../../context/context";

export function DirectoryBarHome() {
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
    setDeleteType,
  } = useGlobalContext();

  const handleFolder = () => {
    openModal("folder");
  };
  const handleCard = () => {
    openModal("card");
  };
  const handleDeleteIn = (type) => {
    const bothSum = folders.length + cards.length;
    if (bothSum === 0) return;
    setDeleteType(type);
    setIsDeleteOn(!isDeleteOn);
    if (isDeleteOn) setDeleteType(null);
  };
  const handleSelectIn = () => {
    setIsSelectAllOn(!isSelectAllOn);
    handleDelete(null, null, true);
  };

  return (
    <>
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
          <button
            className={`dir-btn ${isDeleteOn && "selected"}`}
            onClick={handleDeleteIn}
          >
            <AiFillDelete /> <p>Delete</p>
          </button>
        </>
      ) : (
        <>
          <button className="dir-btn" onClick={handleFolder}>
            <AiFillFolderAdd />
            <p>
              <p>Add </p>Folder
            </p>
          </button>
          <button className="dir-btn" onClick={handleCard}>
            <AiFillFileAdd />
            <p>
              <p>Add </p> Card
            </p>
          </button>
          <button
            className={`dir-btn ${isDeleteOn && "selected"}`}
            onClick={handleDeleteIn}
          >
            <AiFillDelete /> <p>Delete</p>
          </button>
        </>
      )}
    </>
  );
}

export function DirectoryBarRecycle() {
  const {
    openModal,
    isDeleteOn,
    setIsDeleteOn,
    deleteItem,
    emptyItem,
    isSelectAllOn,
    setIsSelectAllOn,
    handleDelete,
    folders,
    cards,
    setDeleteType,
    deleteType,
    handleDeleteType,
  } = useGlobalContext();
  const handleDeleteIn = (type) => {
    const bothSum = folders.length + cards.length;
    if (bothSum === 0) return;
    setDeleteType(type);
    setIsDeleteOn(!isDeleteOn);
    if (isDeleteOn) setDeleteType(null);
  };
  const handleSelectIn = () => {
    setIsSelectAllOn(!isSelectAllOn);
    handleDelete(null, null, true);
  };
  return (
    <>
      {isDeleteOn ? (
        <>
          <button
            className={`dir-btn ${isSelectAllOn && "selected"}`}
            onClick={handleSelectIn}
          >
            <AiFillAppstore /> <p>Select All</p>
          </button>
          <button className="dir-btn" onClick={handleDeleteType}>
            <GiConfirmed /> <p>Confirm</p>
          </button>
          {deleteType === "restore" ? (
            <button
              className={`dir-btn ${isDeleteOn && "selected"}`}
              onClick={() => handleDeleteIn("restore")}
            >
              <MdRestore /> <p>Restore</p>
            </button>
          ) : (
            <button
              className={`dir-btn  ${isDeleteOn && "selected"}`}
              onClick={() => handleDeleteIn("delete")}
            >
              <BsTrash /> <p>Delete</p>
            </button>
          )}
        </>
      ) : (
        <>
          <button
            className={`dir-btn ${isDeleteOn && "selected"}`}
            onClick={() => handleDeleteIn("restore")}
          >
            <MdRestore /> <p>Restore</p>
          </button>
          <button
            className={`dir-btn  ${isDeleteOn && "selected"}`}
            onClick={() => handleDeleteIn("delete")}
          >
            <BsTrash /> <p>Delete</p>
          </button>
        </>
      )}
    </>
  );
}
