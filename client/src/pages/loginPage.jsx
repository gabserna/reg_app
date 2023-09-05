import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, FormControl, InputLabel, FilledInput, Box, IconButton, InputAdornment } from "@mui/material";
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");
  //const [passwordShown, setPasswordShown] = useState(false);
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

  return (
    <>
      <div className="main">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2>Access</h2>
          <h3>with your credentials:</h3>

          <div>
          <Box
      display="flex"
      flexDirection={"column"}
      width={"100%"}
    >
              <TextField
                required
                id="filled-required"
                label="Username"
                defaultValue=""
                variant="filled"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <FormControl sx={{ mt: 2 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password *
                </InputLabel>
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
          </div>

          <button type="submit" id="loginSubmit">
            Log in
          </button>
          <label id="regNew">
            New here? Click: <Link to="/registration">Register</Link>
          </label>
        </form>

        {serverData && <p>Server Data: {serverData.someProperty}</p>}
      </div>
    </>
  );
}

export default Login;
