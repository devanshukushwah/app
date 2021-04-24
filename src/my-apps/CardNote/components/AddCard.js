import React, { useRef, useEffect } from "react";
import "./css/AddFolder-AddCard.css";
import firebase from "../utils/firebase";

function AddCard({ setValue, value, title, setTitle, addCard }) {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);
  const handleCardSubmit = (e) => {
    e.preventDefault();
    addCard();
    const ref = firebase.database().ref("cardnote/");
    const data = {
      title,
      value,
      type: "card",
    };
    ref.push(data);
    setTitle("");
    setValue("");
  };
  return (
    <main className="modal-container">
      <form className="addcard" onSubmit={handleCardSubmit}>
        <h3>Add Card</h3>
        <input
          ref={refContainer}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="data"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export default AddCard;
