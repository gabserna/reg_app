import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
    <div className="main">
      <h1 id="login-header">Welcome!</h1>
      <h3 id="login-header">Login with your user credentials</h3>
      
      <div id="login-error-msg-holder">
        {/* <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p> */}
      </div>
      
      <form id="login-form">
        <input type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" />
        <br />
        <input type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" />
        <br />
        <input type="submit" value="Login" id="login-form-submit" />
      </form>
    </div>
    </>
  );
}

export default App;
