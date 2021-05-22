import React from "react";
import { CgCloseR } from "react-icons/cg";
import { useGlobalContext } from "../context/context";
import "./css/Modal.css";
import ModalFolder from "./sub-components/ModalFolder";
import ModalCard from "./sub-components/ModalCard";

function Modal() {
  const { closeModal, modalType, isError, errorType } = useGlobalContext();
  let styleError = {
    justifyContent: "flex-end",
  };
  if (isError) {
    styleError = {
      justifyContent: "space-between",
    };
  }
  return (
    <>
      <section className="background"></section>
      <main className="modal">
        <section className="modalBody">
          <div className="xross" style={styleError}>
            {isError && <p>{errorType}</p>}
            <button onClick={closeModal}>
              <CgCloseR />
            </button>
          </div>
          <section className="modal">
            {modalType === "folder" && <ModalFolder />}
            {modalType === "card" && <ModalCard />}
          </section>
        </section>
      </main>
    </>
  );
}

export default Modal;
