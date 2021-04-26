import React, { useEffect, useState, useRef } from "react";
import "./css/CardsContainer.css";
import Card from "./Card";
import Folder from "./Folder";
import firebase from "../utils/firebase";
import Loader from "./Loader";
import NoItems from "./NoItems";

function CardsContainer({ isOperation, url, setUrl }) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [listWithPageLevel, setListWithPageLevel] = useState([[]]);
  const [currentPageLevel, setCurrentPageLevel] = useState(0);
  const [listData, setListData] = useState(null);
  const refContainer = useRef(null);

  const fetchdata = () => {
    const tempList = [];

    const ref = firebase.database().ref(`${url}/folders/`);
    ref.once("value", (snapshot) => {
      const data = snapshot.val();
      for (let i in data) {
        tempList.push(data[i]);
      }
    });
    const ref2 = firebase.database().ref(`${url}/cards/`);
    ref2
      .once("value", (snapshot) => {
        const data = snapshot.val();
        for (let i in data) {
          tempList.push(data[i]);
        }
        console.log(tempList);
      })
      .then(() => setListData(tempList));
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
  }, [isOperation, url]);

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
      {listData && listData.length == 0 && <NoItems />}
      {listData &&
        listData.map((item) => {
          if (item.type === "folder") {
            return (
              <Folder
                url={url}
                setUrl={setUrl}
                key={item.id}
                listData={listData}
                setListData={setListData}
                {...item}
              />
            );
          }
          return <Card key={item.id} {...item} />;
        })}
    </main>
  );
}

export default CardsContainer;
