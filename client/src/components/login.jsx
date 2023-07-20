import React, { useState } from "react";
import "../Style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function darkMode() {
  // Get the current state of dark mode from localStorage (if any)
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Toggle the dark mode
  const newDarkMode = !isDarkMode;

  // Save the new dark mode state to localStorage
  localStorage.setItem("darkMode", newDarkMode);

  // Update the class of the document.body based on the new dark mode state
  document.body.classList.toggle("dark-mode", newDarkMode);
}

function Login() {
  // State to track the username and password fields (if needed in the future)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission (if needed in the future)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here if necessary
  };

  return (
    <>
    {/* Use onClick to call the darkMode function */}
    <button id="darkModeButton" onClick={darkMode} aria-label="Toggle dark mode">
        <FontAwesomeIcon icon={faMoon} />
      </button>

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
            type="password"
            name="password"
            id="password-field"
            className="login-form-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" id="login-form-submit" />
        </form>

        <p>
          New here? Click: <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}
export default Login;