import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/spinner";
import "font-awesome/css/font-awesome.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/GlobalStyles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false); // Combine `showPassword` y `passwordShown` en una sola variable

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // login logic here
  };

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <LoadingSpinner />
      <div className="main">
        <h1>Let's get in</h1>
        <h3>Login with your user credentials</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="userLogin"
            className="login-form-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <div className="hidePasswd">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="userPwd"
              className="login-form-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={togglePassword}>
              <i
                className={`fa ${passwordShown ? "fa-eye" : "fa-eye-slash"}`}
              />
            </button>
          </div>
          <input type="submit" id="login-form-submit" />
        </form>
        <label id="regNew">
          New here? Click: <Link to="/registration">Register</Link>
        </label>
      </div>
    </>
  );
}
export default Login;
