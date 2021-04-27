import React from "react";
import "./css/Folder.css";
import { FaFolder } from "react-icons/fa";

function Folder({
  id,
  title,
  setListData,
  url,
  setUrl,
  directoryPath,
  setDirectoryPath,
}) {
  const handleFolderClick = () => {
    // const ref = firebase
    // .database()
    // .ref(`cardnote/directory/${title + "-" + id}`);
    // ref.set()
    const tempUrl = `cardnote/directory/${title + "-" + id}`;
    setUrl(tempUrl);
    setListData(null);
    const data = {
      title,
      url: tempUrl,
    };
    const editPathList = [...directoryPath, data];
    setDirectoryPath(editPathList);
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
