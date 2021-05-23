import React, { useState } from "react";
import "./css/Card.css";
import { useGlobalContext } from "../../context/context";
import SeleteDelete from "./SeleteDelete";
import SingleCard from "./SingleCard";

function Cards() {
  const { isDeleteOn, handleDelete, setIsSelectAllOn, cards, setCards } =
    useGlobalContext();

  const handleDeleteIn = (id) => {
    if (!isDeleteOn) return;
    handleDelete(id, "card");
    setIsSelectAllOn(false);
  };

  return (
    <section className="cardcontainer col">
      {cards.map((item) => {
        const { id, clicked } = item;
        return (
          <article key={id} className="card" onClick={() => handleDeleteIn(id)}>
            <SingleCard {...item} />
            {clicked && <SeleteDelete />}
          </article>
        );
      })}
    </section>
  );
}

export default Cards;
