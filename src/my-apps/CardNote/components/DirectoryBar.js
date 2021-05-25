import React, { useState } from "react";
import "./css/DirectoryBar.css";
import {
  DirectoryBarHome,
  DirectoryBarRecycle,
} from "./sub-components/DirectoryBarBoth";
import { useGlobalContext } from "../context/context";

function DirectoryBar() {
  const { isRecycleBin } = useGlobalContext();

  return (
    <>
      <section className="directory-bar">
        {!isRecycleBin ? <DirectoryBarHome /> : <DirectoryBarRecycle />}
      </section>
    </>
  );
}

export default DirectoryBar;
