import "../Style.css";
//import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="main">
        <h1 id="login-header">Welcome!</h1>
        <h4 id="login-header">Login with your user credentials</h4>

        <form id="login-form">
          <input
            type="text"
            name="username"
            id="username-field"
            className="login-form-field"
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password-field"
            className="login-form-field"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" id="login-form-submit" />
        </form>
      {/* 
        <p>
          New here?, click:{" "}
          <Link to="/register">Register</Link>
        </p>

        // try and catch statements as an event handlers
        */}

      </div>
    </>
  );
}

export default Login;