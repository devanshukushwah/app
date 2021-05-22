import React from "react";
import { CgChevronDown } from "react-icons/cg";
import { useGlobalContext } from "../context/context";
import "./css/TopHeader.css";
import logo from "./images/cardnoteCurveIcon.svg";
import Modal from "./Modal";
import Profile from "./Profile";
function TopHeader() {
  const { isModal, toggleProfile } = useGlobalContext();
  return (
    <>
      {isModal && <Modal />}
      <header className="cardnote-header">
        <img src={logo} alt="cardnote" className="cardnote-logo" />
        <button className="profile-toggler" onClick={toggleProfile}>
          <p>My Account</p>
          <CgChevronDown />
        </button>
      </header>
      <Profile />
    </>
  );
}

export default TopHeader;
