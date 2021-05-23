import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";

function SingleCard({ title, value }) {
  const [data, setData] = useState(title);
  const { isDeleteOn } = useGlobalContext();
  const handleSwap = () => {
    if (!isDeleteOn) data === title ? setData(value) : setData(title);
  };
  return (
    <>
      <div className="singleCard" onClick={handleSwap}>
        {data}
      </div>
    </>
  );
}

export default SingleCard;
