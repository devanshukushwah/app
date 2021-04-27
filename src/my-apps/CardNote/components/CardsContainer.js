import React, { useEffect, useState, useRef } from "react";
import "./css/CardsContainer.css";
import Card from "./Card";
import Folder from "./Folder";
import firebase from "../utils/firebase";
import Loader from "./Loader";
import NoItems from "./NoItems";
import DirectoryAddressPath from "./DirectoryAddressPath";

function CardsContainer({ isOperation, url, setUrl }) {
  const [directoryPath, setDirectoryPath] = useState([
    { title: "Homepage", url: url },
  ]);
  const [listData, setListData] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
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
        })
        .then(() => setListData(tempList));
    };
    fetchdata();
  }, [isOperation, url]);

  return (
    <>
      <DirectoryAddressPath
        directoryPath={directoryPath}
        setDirectoryPath={setDirectoryPath}
        url={url}
        listData={listData}
        setListData={setListData}
        setUrl={setUrl}
      />
      <main className="cards-container" ref={refContainer}>
        {!listData && <Loader />}
        {listData && listData.length === 0 && <NoItems />}
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
                  directoryPath={directoryPath}
                  setDirectoryPath={setDirectoryPath}
                  {...item}
                />
              );
            }
            return <Card key={item.id} {...item} />;
          })}
      </main>
    </>
  );
}

export default CardsContainer;
