import React from "react";
import { FaFolder } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import "./css/Folder.css";
import SeleteDelete from "./SeleteDelete";

function Folder({ id, title, clicked }) {
  const { clickedOnFolder, handleDelete, isDeleteOn, setIsSelectAllOn } =
    useGlobalContext();

  const handleClick = (id, title) => {
    isDeleteOn ? handleDelete(id, "folder") : clickedOnFolder(id, title);
    setIsSelectAllOn(false);
  };
  return (
    <article className="folderCard" onClick={() => handleClick(id, title)}>
      <FaFolder />
      {title}
      {clicked && <SeleteDelete />}
    </article>
  );
}

export default Folder;
