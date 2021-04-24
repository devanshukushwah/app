import React, { useEffect, useState } from "react";
import "./CardNote.css";
import TopHeader from "./components/TopHeader";
import CardsContainer from "./components/CardsContainer";
import firebase from "./utils/firebase";

function CardNote() {
  const [listData, setListData] = useState([]);
  const [isOperation, setIsOperation] = useState(true);
  const fetchdata = () => {
    // setListData([]);
    const ref = firebase.database().ref("cardnote/");
    ref.once("value", (snapshot) => {
      const tempList = [];
      const data = snapshot.val();
      for (let id in data) {
        tempList.push(data[id]);
      }
      // setListData(set);
      // console.log(set);
      setListData(tempList);
      // console.log(listData);
    });
  };
  useEffect(() => {
    fetchdata();
  }, [isOperation]);
  return (
    <>
      <TopHeader setIsOperation={setIsOperation} isOperation={isOperation} />
      <CardsContainer listData={listData} />
    </>
  );
}

export default CardNote;
