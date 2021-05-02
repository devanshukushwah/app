import React, { useState, useRef } from "react";
import "./css/Signup.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "./images/cardnote-icon.svg";
import bottomFullDesign from "./images/bottom-full-design.svg";
import bottomMobileDesing from "./images/bottom-mobile-design.svg";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("don");

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return alert("Password Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/cardnote/");
    } catch {
      setError("Failed to create Account/or already exist");
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <>
      <section className="body">
        <div className="signup-container">
          <div className="container1">
            <img src={logo} alt="logo" />
            <p>MAKES NOTES EASILY</p>
          </div>

          <div className="container2">
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                ref={emailRef}
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="password"
                ref={passwordRef}
                placeholder="Password"
                autoComplete="off"
                required
              />
              <input
                autoComplete="off"
                type="password"
                ref={passwordConfirmRef}
                placeholder="Confirm Password"
                required
              />
              <button type="submit" disabled={loading} className="signup-btn">
                SIGNUP
              </button>
              <div className="signup-register">
                <label>Already Have Account </label>
                <Link to="/cardnote/login" className="register-btn">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
        <img
          src={window.innerWidth > 970 ? bottomFullDesign : bottomMobileDesing}
          alt="bottom"
          className="bottom"
        />
      </section>
    </>
  );
}

export default Signup;
