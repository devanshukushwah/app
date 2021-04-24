import React from "react";
import "./css/Folder.css";
import { FaFolder } from "react-icons/fa";

function Folder({ title }) {
  return (
    <div className="box-folder">
      <p>
        <FaFolder /> {title}
      </p>
    </div>
  );
}

export default Folder;
