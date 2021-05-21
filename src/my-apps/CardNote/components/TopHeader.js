import React from "react";
import { CgChevronDown } from "react-icons/cg";
import { useGlobalContext } from "../context/context";
import "./css/TopHeader.css";
import logo from "./images/cardnoteCurveIcon.svg";
import Modal from "./Modal";
import Profile from "./Profile";
function TopHeader() {
  const { isModal, profile, setProfile } = useGlobalContext();
  return (
    <>
      {isModal && <Modal />}
      <header className="cardnote-header">
        <img src={logo} alt="cardnote" className="cardnote-logo" />
        <button className="profile" onClick={() => setProfile(!profile)}>
          <p>My Account</p>
          <CgChevronDown />
        </button>
      </header>
      <section className={`profile ${profile && "show"}`}>
        <Profile />
      </section>
    </>
  );
}

export default TopHeader;
