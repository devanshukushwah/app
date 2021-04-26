import React from "react";
import "./css/Folder.css";
import { FaFolder } from "react-icons/fa";
import firebase from "../utils/firebase";

function Folder({ id, title, setListData, url, setUrl }) {
  const handleFolderClick = () => {
    // const ref = firebase
    // .database()
    // .ref(`cardnote/directory/${title + "-" + id}`);
    // ref.set()
    const tempUrl = `cardnote/directory/${title + "-" + id}`;
    console.log(tempUrl);
    setUrl(tempUrl);
    setListData(null);
  };
  return (
    <div className="box-folder" onClick={handleFolderClick}>
      <p>
        <FaFolder /> {title}
      </p>
    </div>
  );
}

export default Folder;
