import React from "react";
import { useAuth } from "../context/AuthContext";
import "./css/Profile.css";
import { BiLogOut } from "react-icons/bi";
import { useGlobalContext } from "../context/context";

function Profile() {
  const { logout } = useAuth();
  const { profile } = useGlobalContext();
  // React.useEffect(() => {
  //   console.log("profile");
  // }, [profile]);
  return (
    <main
      className={
        profile ? "profile-container show-container" : "profile-container"
      }
    >
      <div className="tip"></div>
      <div className="profile">
        <button onClick={logout}>
          <BiLogOut />
          <p>LOGOUT</p>
        </button>
      </div>
    </main>
  );
}

export default Profile;
