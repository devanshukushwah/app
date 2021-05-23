import React from "react";
import { FaFolder } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import "./css/Folder.css";
import SeleteDelete from "./SeleteDelete";

function Folders() {
  const {
    clickedOnFolder,
    handleDelete,
    isDeleteOn,
    setIsSelectAllOn,
    folders,
  } = useGlobalContext();

  const handleClick = (id, title) => {
    console.log(id, title);
    isDeleteOn ? handleDelete(id, "folder") : clickedOnFolder(id, title);
    setIsSelectAllOn(false);
  };
  return (
    <section className="folderContainer col">
      {folders.map((item) => {
        const { id, title, clicked } = item;
        return (
          <article
            key={id}
            className="folderCard"
            onClick={() => handleClick(id, title)}
          >
            <FaFolder />
            {title}
            {clicked && <SeleteDelete />}
          </article>
        );
      })}
    </section>
  );
}

export default Folders;
