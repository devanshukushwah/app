import React from "react";
import "./CardNote.css";
import { GlobalProvider } from "./context/context";

//components
import TopHeader from "./components/TopHeader";
import CardContainer from "./components/CardContainer";
import Directory from "./components/Directory";
function CardNote() {
  return (
    <>
      <GlobalProvider>
        <TopHeader />
        <Directory />
        <CardContainer />
      </GlobalProvider>
    </>
  );
}

export default CardNote;
