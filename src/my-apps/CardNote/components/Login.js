import React, { useState, useRef } from "react";
import "./css/Signup.css";
import "./css/HomePageDesign.css";
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
      alert("Failed to Sign In");
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <main className="signup-main">
      <div className="cardnote-design-body">
        <div className="cardnote-design-container">
          <div className="left">
            <div className="cardnote-icon">
              <svg
                viewBox="0 0 406 285"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="NOTES"
                  d="M152.866 179.017H143.231L106.636 123.512V179.017H97V106.989H106.636L143.331 162.741V106.989H152.866V179.017ZM225.807 145.328C225.807 152.386 224.608 158.553 222.212 163.83C219.816 169.073 216.421 173.08 212.027 175.851C207.634 178.621 202.508 180.006 196.651 180.006C190.926 180.006 185.85 178.621 181.423 175.851C176.997 173.047 173.552 169.073 171.089 163.928C168.659 158.751 167.411 152.765 167.344 145.971V140.777C167.344 133.851 168.559 127.733 170.989 122.424C173.419 117.114 176.847 113.058 181.274 110.254C185.733 107.418 190.826 106 196.55 106C202.375 106 207.501 107.402 211.927 110.205C216.387 112.975 219.816 117.015 222.212 122.325C224.608 127.601 225.807 133.752 225.807 140.777V145.328ZM216.271 140.678C216.271 132.136 214.54 125.59 211.079 121.039C207.617 116.455 202.774 114.163 196.55 114.163C190.493 114.163 185.717 116.455 182.222 121.039C178.761 125.59 176.98 131.922 176.88 140.035V145.328C176.88 153.606 178.627 160.119 182.122 164.869C185.65 169.584 190.493 171.943 196.651 171.943C202.841 171.943 207.634 169.716 211.029 165.264C214.424 160.779 216.171 154.364 216.271 146.021V140.678ZM289.011 114.806H265.647V179.017H256.111V114.806H232.796V106.989H289.011V114.806ZM340.885 145.724H309.381V171.25H345.976V179.017H299.797V106.989H345.477V114.806H309.381V137.957H340.885V145.724ZM379.326 146.911C371.104 144.57 365.114 141.7 361.352 138.303C357.626 134.874 355.762 130.652 355.762 125.639C355.762 119.967 358.041 115.284 362.6 111.59C367.195 107.863 373.152 106 380.475 106C385.467 106 389.909 106.957 393.803 108.869C397.731 110.782 400.759 113.42 402.891 116.784C405.053 120.148 406.136 123.825 406.136 127.816H396.501C396.501 123.463 395.102 120.049 392.306 117.576C389.512 115.069 385.566 113.816 380.475 113.816C375.748 113.816 372.055 114.855 369.39 116.933C366.762 118.977 365.448 121.83 365.448 125.491C365.448 128.426 366.696 130.916 369.192 132.961C371.721 134.973 375.997 136.819 382.021 138.501C388.08 140.183 392.805 142.047 396.2 144.091C399.628 146.103 402.157 148.461 403.79 151.165C405.453 153.87 406.286 157.052 406.286 160.713C406.286 166.55 403.989 171.233 399.397 174.762C394.802 178.258 388.661 180.006 380.974 180.006C375.982 180.006 371.321 179.066 366.994 177.186C362.666 175.273 359.322 172.668 356.958 169.37C354.631 166.072 353.464 162.329 353.464 158.14H363.099C363.099 162.494 364.714 165.94 367.944 168.48C371.204 170.986 375.549 172.239 380.974 172.239C386.032 172.239 389.909 171.217 392.606 169.172C395.301 167.128 396.651 164.341 396.651 160.812C396.651 157.283 395.403 154.562 392.904 152.65C390.408 150.704 385.882 148.791 379.326 146.911Z"
                  fill="black"
                />
                <path
                  id="C"
                  d="M215.633 193.271C212.171 222.623 201.207 245.305 182.74 261.316C164.402 277.199 139.973 285.141 109.452 285.141C76.3661 285.141 49.8208 273.387 29.8154 249.88C9.9385 226.372 0 194.923 0 155.531V128.847C0 103.052 4.61657 80.3705 13.8498 60.8022C23.2112 41.2336 36.4197 26.2395 53.4755 15.82C70.5311 5.27332 90.28 0 112.722 0C142.473 0 166.325 8.25944 184.279 24.7783C202.232 41.1701 212.684 63.9152 215.633 93.0138H178.508C175.302 70.904 168.313 54.8936 157.541 44.9822C146.897 35.0708 131.957 30.1151 112.722 30.1151C89.1259 30.1151 70.5955 38.7559 57.1303 56.0372C43.7934 73.3183 37.1251 97.9061 37.1251 129.8V156.675C37.1251 186.79 43.4728 210.743 56.1685 228.532C68.8642 246.322 86.6253 255.216 109.452 255.216C129.97 255.216 145.679 250.642 156.579 241.493C167.608 232.217 174.917 216.143 178.508 193.271H215.633Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="message">NOTES MAKE EASILY</div>
          </div>
          <div className="right">
            <div className="signup-container">
              {/* form */}
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Type Your email"
                  required
                />
                <br></br>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Type Your Password"
                  required
                />
                <br></br>
                <button type="submit" disabled={loading} className="login-btn">
                  LOGIN
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
        </div>
        <div className="bottom-design">
          <svg
            viewBox="0 0 1366 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bottom-full-design">
              <path
                id="bottom-design"
                d="M1366 0.200745C1013.47 13.9661 716.002 122.775 0 398H1366V0.200745Z"
                fill="url(#paint0_linear)"
              />
              <g id="tilt-rectangle" filter="url(#filter0_d)">
                <rect
                  width="262.764"
                  height="164.763"
                  rx="16"
                  transform="matrix(0.939636 -0.342174 0.306957 0.951723 182.236 213.697)"
                  fill="white"
                />
                <rect
                  x="0.623297"
                  y="0.304774"
                  width="261.764"
                  height="163.763"
                  rx="15.5"
                  transform="matrix(0.939636 -0.342174 0.306957 0.951723 182.18 213.925)"
                  stroke="#EFEFEF"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="182.361"
                y="128.302"
                width="297.228"
                height="245.688"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="1366.5"
                y1="159.001"
                x2="-386.362"
                y2="464.065"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DEEC86" />
                <stop offset="1" stop-color="#2D2E25" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>

    // {/* <sdf>sadfadsfadsf */}
    // <main className="main">
    //   <div className="container">
    //     <center>
    //       <h2>Login Page</h2>
    //       {error}
    //     </center>
    //     <form onSubmit={handleSubmit}>
    //       <label>Email</label>
    //       <br></br>
    //       <input
    //         type="email"
    //         ref={emailRef}
    //         placeholder="Type Your email"
    //         required
    //       />
    //       <br></br>
    //       <label>Password</label>
    //       <br></br>
    //       <input
    //         type="password"
    //         ref={passwordRef}
    //         placeholder="Type Your Password"
    //         required
    //       />
    //       <br></br>
    //       <button type="submit" disabled={loading} className="login-btn">
    //         Log In
    //       </button>
    //       <br></br>
    //     <div className="register">
    //       <label htmlFor="signup">Not Have Account: </label>
    //       <Link to="/cardnote/signup" className="btn">
    //         Sign Up
    //       </Link>
    //     </div>
    //     </form>
    //   </div>
    // </main>
  );
}

export default Login;
