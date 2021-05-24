import React from "react";
import { useAuth } from "../context/AuthContext";
import "./css/Profile.css";
import { BiLogOut } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import RecycleBinButton from "./sub-components/RecycleBinButton";

function Profile() {
  const { logout } = useAuth();
  const { isProfile } = useGlobalContext();
  return (
    <main
      className={
        isProfile ? "profile-container show-container" : "profile-container"
      }
    >
      <div className="tip"></div>
      <div className="profile">
        <RecycleBinButton />
        <button className="btn" onClick={logout}>
          <BiLogOut />
          <p>Logout</p>
        </button>
      </div>
    </main>
  );
}

export default Profile;
