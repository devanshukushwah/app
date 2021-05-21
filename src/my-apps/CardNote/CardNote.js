import React from "react";
import "./CardNote.css";
import { GlobalProvider } from "./context/context";

//components
import TopHeader from "./components/TopHeader";
import DirectoryBar from "./components/DirectoryBar";
import DirectoryPath from "./components/DirectoryPath";
import CardContainer from "./components/CardContainer";
function CardNote() {
  return (
    <>
      <GlobalProvider>
        <TopHeader />
        <section className="sticky">
          <DirectoryBar />
          <DirectoryPath />
        </section>
        <CardContainer />
      </GlobalProvider>
    </>
  );
}

export default CardNote;
