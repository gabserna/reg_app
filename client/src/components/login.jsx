import React, { useState } from "react";
import "../Style.css";
import { Link } from "react-router-dom";
//import NavBar from "./Navbar";
import LoadingSpinner from "./spinner"

function Login() {
  // State to track the username and password fields (if needed in the future)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission (if needed in the future)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here if necessary
  };

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  //NOTE: hamburger menu on responsive?

  // spinner
  //step 4 of      https://contactmentor.com/how-to-add-loading-spinner-react-js/?expand_article=1

  return (
    <>
    <LoadingSpinner />
      <div className="main">
        <h1 id="login-header">Welcome!</h1>
        <h4 id="login-subheader">Login with your user credentials</h4>

        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username-field"
            className="login-form-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="myPasswd"
            className="login-form-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" id="login-form-submit" />
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleShowPassword}
            />{" "}
            show
          </label><br />
          <button type="submit" data-provider="google">
          <span className="datt" data-provider="google"></span>
          <span className="cba09aff6">Continue with Google</span>
          </button>
          {/* <a href="/">Continue with Google</a> */}
        </form>

        <p>
          New here? Click: <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
