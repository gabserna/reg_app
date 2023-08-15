import { useState } from "react";
import { Link } from "react-router-dom";
import TogglePassword from "../components/TogglePassword"; // Import el nuevo componente
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

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
      <div className="main">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Access</h1>
          <h3>with your credentials:</h3>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TogglePassword
              passwordShown={passwordShown}
              togglePassword={togglePassword}
            />
          </div>

          <button type="submit" id="loginSubmit">
            Log in
          </button>
          <label id="regNew">
            New here? Click: <Link to="/registration">Register</Link>
          </label>
        </form>
      </div>
    </>
  );
}

export default Login;
