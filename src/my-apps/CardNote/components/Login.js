import React, { useState, useRef, useEffect } from "react";
import "./css/Signup.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "./images/cardnoteCurveIcon.svg";
import bottomFullDesign from "./images/bottom-full-design.svg";
import bottomMobileDesing from "./images/bottom-mobile-design.svg";
import LoadingLoader from "./LoadingLoader";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = "CardNote";
    // return () => document.title = "React-App"
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("don");
    setError("wait...");

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/cardnote/");
    } catch {
      alert("Failed to Sign In");
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <section className="body">
      <div className="signup-container">
        <div className="container1">
          <img src={logo} alt="logo" />
          <p>MAKES NOTES EASILY</p>
        </div>

        <div className="container2">
          <form
            onSubmit={handleSubmit}
            className="signup-form"
            style={{ gap: "0" }}
          >
            <input type="email" ref={emailRef} placeholder="Email" required />
            <br></br>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
            <br></br>
            <button type="submit" disabled={loading} className="login-btn">
              {loading ? <LoadingLoader /> : <p>LOGIN</p>}
            </button>
            <br></br>
            <div className="signup-register">
              <label>Already Have Account </label>
              <Link to="/cardnote/signup" className="register-btn">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <img
        src={windowWidth > 970 ? bottomFullDesign : bottomMobileDesing}
        alt="bottom-Design"
        className="bottom"
      />
    </section>
  );
}

export default Login;
