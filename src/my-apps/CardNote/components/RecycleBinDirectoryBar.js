import React from "react";
import { BsTrash } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import "./css/RecycleBinDirectoryBar.css";
function RecycleBinDirectoryBar() {
  const { recycleBinOff } = useGlobalContext();
  return (
    <main className="rbdb">
      <p>
        <BsTrash />
        RecycleBin
      </p>
      <button className="btn" onClick={recycleBinOff}>
        Go Homepage
      </button>
    </main>
  );
}

export default RecycleBinDirectoryBar;
