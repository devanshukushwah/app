import React, { useState, useEffect } from "react";
import "./Signup.css";
import firebase from "../utils/firebase";
import Modal from "./Modal";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modal, showModal] = useState(true);
  const [modaldata, setModalData] = useState({});

  // for modal timeout
  useEffect(() => {
    let timeout = setTimeout(() => {
      showModal(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [modal]);

  const alreadyExist = () => {
    var isdata = false;
    const ref = firebase
      .database()
      .ref("accounts/" + userName + password + "/");
    ref.once("value", (snapshot) => {
      const data = snapshot.val();

      if (data.exist === true) {
        isdata = true;
      }
    });
    return isdata;
  };

  // for create account
  const handleSignup = () => {
    // console.log(alreadyExist());
    if (alreadyExist() === true) {
      showModal(true);
      setModalData({ type: "error", text: "Already Exist!" });
      return;
    }
    // console.log("23");
    const ref = firebase
      .database()
      .ref("accounts/" + userName + password + "/");
    const data = {
      userName,
      password,
      exist: true,
    };
    ref
      .set(data)
      .then(() => {
        showModal(true);
        setModalData({ type: "success", text: "Account Created!" });
      })
      .catch(() => {
        showModal(true);
        setModalData({ type: "error", text: "Error Occured!" });
      });
  };

  const handleSubmit = () => {};
  return (
    <main>
      <div className="container">
        <center>
          <h2>Login Page</h2>
        </center>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br></br>
          <input
            type="text"
            placeholder="Type Your Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            placeholder="Type Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          {modal && <Modal {...modaldata} />}
          <button type="submit" className="login-btn">
            Login
          </button>
          <br></br>
        </form>
        <div className="register">
          <label htmlFor="signup">Not have Account: </label>
          <button name="signup" onClick={handleSignup}>
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}

export default Signup;
