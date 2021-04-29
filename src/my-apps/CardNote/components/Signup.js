import React, { useState, useRef } from "react";
import "./css/Signup.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

// import firebase from "../utils/firebase";
// import Modal from "./Modal";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const [modal, showModal] = useState(true);
  // const [modaldata, setModalData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("don");

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError("Password Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/cardnote/");
    } catch {
      setError("Failed to create Account/or already exist");
    }
    setLoading(false);
  };
  return (
    <main className="main">
      <div className="container">
        <center>
          <h2>Signup Page</h2>
          {error}
        </center>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            ref={emailRef}
            placeholder="Type Your email"
            required
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Type Your Password"
            required
          />
          <br></br>
          <label>Confirm Password</label>
          <br></br>
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Type Your Confirm Password"
            required
          />
          <br></br>
          {/* {modal && <Modal {...modaldata} />} */}
          <button type="submit" disabled={loading} className="login-btn">
            Sign Up
          </button>
          <br></br>
        </form>
        <div className="register">
          <label htmlFor="signup">Have Account: </label>
          <Link to="/cardnote/login" className="btn">
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Signup;
