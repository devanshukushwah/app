import React from "react";
import { useAuth } from "../context/AuthContext";
import "./css/Profile.css";
import { BiLogOut } from "react-icons/bi";

function Profile() {
  const { logout } = useAuth();
  return (
    <main className="profile">
      <button onClick={logout}>
        <BiLogOut />
        LOGOUT
      </button>
    </main>
  );
}

export default Profile;
