import React, { useEffect, useRef } from "react";
import "./css/ModalType.css";
import { useGlobalContext } from "../../context/context";

function ModalCard() {
  const { addCard } = useGlobalContext();
  const valueFront = useRef(null);
  const valueBack = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(valueFront.current.value, valueBack.current.value);
  };
  useEffect(() => {
    valueFront.current.focus();
  }, []);
  return (
    <main className="modaltype">
      <form className="modal" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Card Front" ref={valueFront} required />
        <input type="text" placeholder="Card Back" ref={valueBack} required />
        <button type="submit">CREATE</button>
      </form>
    </main>
  );
}

export default ModalCard;
