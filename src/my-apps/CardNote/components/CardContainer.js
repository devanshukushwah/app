import React, { useEffect } from "react";
import "./css/CardContainer.css";
import { useGlobalContext } from "../context/context";

//components
import Folder from "./sub-components/Folder";
import Card from "./sub-components/Card";
import Border from "./sub-components/Border";
import NoItems from "./NoItems";
import Loader from "./Loader";

function CardContainer() {
  const { folders, cards, loading } = useGlobalContext();

  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
  }, []);
  // useEffect(() => {
  //   console.log("cardcontainer");
  // }, [isOperation]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="folderCardsBody">
          {folders.length + cards.length === 0 && <NoItems />}
          <section className="folderContainer col">
            {folders.map((item) => {
              return <Folder key={item.id} {...item} />;
            })}
          </section>
          {folders.length !== 0 && cards.length !== 0 && <Border />}

          <section className="cardcontainer col">
            {cards.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </section>
        </main>
      )}
    </>
  );
}

export default CardContainer;
