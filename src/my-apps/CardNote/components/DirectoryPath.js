import React, { useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

import "./css/DirectoryPath.css";
import { useGlobalContext } from "../context/context";
function DirectoryPath() {
  const { clickOnBackButton, directory, clickOnPath, closeProfile } =
    useGlobalContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const refScroll = useRef(null);

  const onScroll = () => {
    setIsScrolled(true);
    closeProfile();
  };
  // useEffect(() => {
  window.onscroll = () => {
    window.pageYOffset > 60 ? onScroll() : setIsScrolled(false);
  };
  // }, []);

  return (
    <main
      className={`directoryPath ${isScrolled && "scrolled"}`}
      ref={refScroll}
    >
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
