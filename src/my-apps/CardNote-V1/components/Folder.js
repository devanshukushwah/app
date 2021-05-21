import React from "react";
import "./css/Folder.css";
import { FaFolder } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Folder({
  id,
  title,
  setListData,
  url,
  setUrl,
  directoryPath,
  setDirectoryPath,
}) {
  const { currentUser } = useAuth();
  const handleFolderClick = () => {
    const user = currentUser.uid;
    const tempUrl = `cardnote/${user}/directory/${id}`;
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
