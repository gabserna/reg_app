import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TogglePassword from "../components/TogglePassword"; // Import el nuevo componente
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // Perform an HTTP GET request to your server when the component mounts
    fetch("/login")
      .then((response) => response.json())
      .then((data) => {
        setServerData(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); //Empty dependency array to fetch data only once when the component mounts


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

        {/* Render the fetched data */}
        {serverData && <p>Server Data: {serverData.someProperty}</p>}

      </div>
    </>
  );
}

export default Login;
