import React from "react";
import { CgCloseR } from "react-icons/cg";
import { useGlobalContext } from "../context/context";
import "./css/Modal.css";
import ModalFolder from "./sub-components/ModalFolder";
import ModalCard from "./sub-components/ModalCard";

function Modal() {
  const { closeModal, modalType } = useGlobalContext();
  return (
    <>
      <section className="background"></section>
      <main className="modal">
        <section className="modalBody">
          <div className="xross">
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
