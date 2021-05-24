import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import "./css/Directory.css";
import DirectoryBar from "./DirectoryBar";
import DirectoryPath from "./DirectoryPath";
import RecycleBinDirectoryBar from "./RecycleBinDirectoryBar";

function Directory() {
  const { closeProfile, isRecycleBin } = useGlobalContext();

  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    setIsScrolled(true);
    closeProfile();
  };
  window.onscroll = () => {
    window.pageYOffset > 60 ? onScroll() : setIsScrolled(false);
  };

  return (
    <>
      <section className={isScrolled ? "sticky scrolled" : "sticky"}>
        <DirectoryBar />

        {isRecycleBin ? <RecycleBinDirectoryBar /> : <DirectoryPath />}
      </section>
    </>
  );
}

export default Directory;
