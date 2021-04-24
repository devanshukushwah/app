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
    ref.on("value", (snapshot) => {
      var tempList = [];
      const data = snapshot.val();
      for (let id in data) {
        if (data[id].type === "folder") {
          tempList.push(data[id]);
        }
        // tempList.push(data[id]);
      }
      for (let id in data) {
        if (data[id].type === "card") {
          tempList.push(data[id]);
        }
        // tempList.push(data[id]);
      }

      // setListData(set);
      // console.log(set);
      // const tempList2 = tempList.filter((item) => item.type === "folder");
      // const tempList3 = tempList.filter((item) => item.type === "card");

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
