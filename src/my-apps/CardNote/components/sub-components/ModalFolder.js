import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/context";
import "./css/ModalType.css";

function ModalFolder() {
  const { addFolder } = useGlobalContext();
  const valueName = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    addFolder(valueName.current.value);
  };
  useEffect(() => {
    valueName.current.focus();
  });
  return (
    <main className="modaltype">
      <form className="modal" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Folder Name" ref={valueName} required />
        <button type="submit">CREATE</button>
      </form>
    </main>
  );
}

export default ModalFolder;
