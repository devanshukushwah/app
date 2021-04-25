import React, { useEffect, useState, useRef } from "react";
import "./css/CardsContainer.css";
import Card from "./Card";
import Folder from "./Folder";
import firebase from "../utils/firebase";
import Loader from "./Loader";

function CardsContainer({ isOperation }) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [listData, setListData] = useState(null);
  const refContainer = useRef(null);
  const fetchdata = () => {
    const ref = firebase.database().ref("cardnote/");
    ref.on("value", (snapshot) => {
      var tempList = [];
      const data = snapshot.val();
      for (let id in data) {
        if (data[id].type === "folder") {
          tempList.push(data[id]);
        }
      }
      for (let id in data) {
        if (data[id].type === "card") {
          tempList.push(data[id]);
        }
      }
      setListData(tempList);
    });
  };

  // for updata innerwidth
  const updateWidthAndHeight = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  useEffect(() => {
    fetchdata();
  }, [isOperation]);

  // for grid height
  useEffect(() => {
    if (listData !== null) {
      const lenData = listData.length;
      if (lenData > 0) {
        if (innerWidth < 510) {
          refContainer.current.style.minHeight = `${120 * lenData}px`;
        } else if (innerWidth > 509 && innerWidth < 730) {
          refContainer.current.style.minHeight = `${(lenData / 2) * 120}px`;
        } else if (innerWidth > 729 && innerWidth < 950) {
          refContainer.current.style.minHeight = `${(lenData / 3) * 120}px`;
        } else if (innerWidth > 949 && innerWidth < 1155) {
          refContainer.current.style.minHeight = `${(lenData / 4) * 120}px`;
        } else {
          refContainer.current.style.minHeight = `${(lenData / 5) * 120}px`;
        }
      }
    }
  }, [listData, innerWidth]);

  return (
    <main className="cards-container" ref={refContainer}>
      {!listData && <Loader />}
      {listData &&
        listData.map((item, index) => {
          if (item.type === "folder") {
            return <Folder key={index} {...item} />;
          }
          return <Card key={index} {...item} />;
        })}
    </main>
  );
}

export default CardsContainer;
