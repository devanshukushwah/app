import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

import "./css/DirectoryPath.css";
import { useGlobalContext } from "../context/context";
function DirectoryPath() {
  const { clickOnBackButton, directory, clickOnPath } = useGlobalContext();

  return (
    <main className="directoryPath">
      <button className="back" onClick={clickOnBackButton}>
        <BsArrowLeftShort />
      </button>
      {/* <FiHardDrive /> */}
      <div className="url">
        {directory.map((item, index) => {
          return (
            <article key={index}>
              <p onClick={() => clickOnPath(item.id)}>{item.name}</p>
              <h3>/</h3>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default DirectoryPath;
