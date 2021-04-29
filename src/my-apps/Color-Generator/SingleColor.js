import React, { useState } from "react";
import "./SingleColor.css";

function SingleColor({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const hexColor = "#" + hex;
  const sgb = rgb.join(",");
  //   console.log(sgb);
  //   useEffect(() => {
  //     let timeout = setTimeout(() => {
  //       setAlert(false);
  //     }, 3000);
  //     return () => clearTimeout(timeout);
  //   });
  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${sgb})` }}
      onClick={handleCopy}
    >
      <p>{weight}%</p>
      <h5>{hexColor}</h5>
      {alert && <p>Copied To Clipboard</p>}
    </article>
  );
}

export default SingleColor;
