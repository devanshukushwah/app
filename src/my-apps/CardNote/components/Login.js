import React, { useState, useRef } from "react";
import "./css/Signup.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
      setError("Failed to Sign In");
    }
    setLoading(false);
  };
  return (
    <main className="main">
      <div className="container">
        <center>
          <h2>Login Page</h2>
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
          {/* {modal && <Modal {...modaldata} />} */}
          <button type="submit" disabled={loading} className="login-btn">
            Log In
          </button>
          <br></br>
        </form>
        <div className="register">
          <label htmlFor="signup">Not Have Account: </label>
          {/* <button name="signup">Sign Up</button> */}
          <Link to="/cardnote/signup" className="btn">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
