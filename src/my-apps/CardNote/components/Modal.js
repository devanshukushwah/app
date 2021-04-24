import React from "react";

function Modal({ type, text }) {
  return (
    <div className={`modal ${type}`}>
      <p>{text}</p>
    </div>
  );
}

export default Modal;
