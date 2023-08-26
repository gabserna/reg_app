import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TogglePassword from "../components/TogglePassword"; // Import el nuevo componente
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      <Box>
        <TextField
          required
          id="filled-required"
          label="Username"
          defaultValue=""
          variant="filled"
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <div className="main">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2>Access</h2>
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
