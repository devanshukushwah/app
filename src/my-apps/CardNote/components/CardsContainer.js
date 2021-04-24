import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import "./css/CardsContainer.css";
import Card from "./Card";
import Folder from "./Folder";

function CardsContainer({ listData }) {
  return (
    <main className="cards-container">
      {listData.map((item, index) => {
        if (item.type === "folder") {
          return <Folder key={index} {...item} />;
        }
        return <Card key={index} {...item} />;
      })}
    </main>
  );
}

export default CardsContainer;
