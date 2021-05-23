import React, { useEffect } from "react";
import "./css/CardContainer.css";
import { useGlobalContext } from "../context/context";

//components
import Folders from "./sub-components/Folders";
import Cards from "./sub-components/Cards";
import Border from "./sub-components/Border";
import NoItems from "./NoItems";
import Loader from "./Loader";

function CardContainer() {
  const { folders, cards, loading } = useGlobalContext();

  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="folderCardsBody">
          {folders.length + cards.length === 0 && <NoItems />}
          <Folders />
          {folders.length !== 0 && cards.length !== 0 && <Border />}
          <Cards />
        </main>
      )}
    </>
  );
}

export default CardContainer;
