import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

function RecycleBinButton() {
  const { isRecycleBin, recycleBinOff, recycleBinOn } = useGlobalContext();
  return (
    <>
      {isRecycleBin ? (
        <button className="btn" onClick={recycleBinOff}>
          <AiOutlineHome />
          <p>Home</p>
        </button>
      ) : (
        <button className="btn" onClick={recycleBinOn}>
          <BsTrash />
          <p>Recycle Bin</p>
        </button>
      )}
    </>
  );
}

export default RecycleBinButton;
