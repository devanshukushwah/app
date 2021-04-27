import React from "react";
import "./css/DirectoryAddressPath.css";
import { FiHardDrive } from "react-icons/fi";

function DirectoryAddressPath({
  directoryPath,
  setDirectoryPath,
  setListData,
  setUrl,
}) {
  const handleClick = (url, index) => {
    // console.log(directoryPath.length, index + 1);
    if (directoryPath.length === index + 1) return;
    const newDirectoryPath = directoryPath.slice(0, index + 1);
    setListData(null);
    setDirectoryPath(newDirectoryPath);
    setUrl(url);
  };
  return (
    <div className="directory-address-path">
      <FiHardDrive />
      {directoryPath.map((item, index) => {
        return (
          <div key={index}>
            {index !== 0 && <h2>/</h2>}
            <li onClick={() => handleClick(item.url, index)}>{item.title}</li>
          </div>
        );
      })}
    </div>
  );
}

export default DirectoryAddressPath;
