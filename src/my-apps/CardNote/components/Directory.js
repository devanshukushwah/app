import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import "./css/Directory.css";
import DirectoryBar from "./DirectoryBar";
import DirectoryPath from "./DirectoryPath";

function Directory() {
  const { closeProfile } = useGlobalContext();

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
        <DirectoryPath />
      </section>
    </>
  );
}

export default Directory;
