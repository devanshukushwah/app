import React, { useState } from "react";
import "./css/Card.css";
import { useGlobalContext } from "../../context/context";
import SeleteDelete from "./SeleteDelete";

function Card({ title, id, value, clicked }) {
  const [data, setData] = useState(title);
  const { isDeleteOn, handleDelete, setIsSelectAllOn } = useGlobalContext();

  const handleChange = () => {
    data === title ? setData(value) : setData(title);
  };

  const handleClick = (id) => {
    isDeleteOn ? handleDelete(id, "card") : handleChange();
    setIsSelectAllOn(false);
  };

  return (
    <article className="card" onClick={() => handleClick(id)}>
      <p className="word-wrap">{data}</p>
      {clicked && <SeleteDelete />}
    </article>
  );
}

export default Card;
