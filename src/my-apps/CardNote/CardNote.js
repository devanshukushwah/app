import React, { useState, useEffect } from "react";
import "./CardNote.css";
import TopHeader from "./components/TopHeader";
import CardsContainer from "./components/CardsContainer";
import { useAuth } from "./context/AuthContext";

function CardNote() {
  const [isOperation, setIsOperation] = useState(true);
  const [url, setUrl] = useState();
  const { currentUser } = useAuth();
  const [homepage, setHomepage] = useState(
    `cardnote/${currentUser.uid}/directory/homepage`
  );

  useEffect(() => {
    let user = "default";
    if (currentUser !== null) user = currentUser.uid;

    const tempUrl = `cardnote/${user}/directory/homepage`;
    setUrl(tempUrl);
  }, [currentUser]);

  return (
    <>
      <TopHeader
        url={url}
        setUrl={setUrl}
        setIsOperation={setIsOperation}
        isOperation={isOperation}
      />
      <CardsContainer
        url={url}
        isOperation={isOperation}
        setUrl={setUrl}
        homepage={homepage}
      />
    </>
  );
}

export default CardNote;
