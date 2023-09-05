import React, { useState } from "react";   // future add useEffect
import { TextField, FormControl, InputLabel, FilledInput, Button, Box, IconButton, InputAdornment } from "@mui/material";
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Registration() {
  const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [passwordShown, setPasswordShown] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputClass, setInputClass] = useState({
    firstName: "",
    email: "",
  });

  function validateEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(input);
  }

  function handleEmailChange(event) {
    const isValidEmail = validateEmail(event.target.value);

    setInputClass((prevInputClass) => ({
      ...prevInputClass,
      email: isValidEmail ? "" : "invalid",
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Check if the first name is empty
    if (!inputClass.firstName) {
      setInputClass((prevInputClass) => ({
        ...prevInputClass,
        firstName: "invalid",
      }));
    } else {
      setInputClass((prevInputClass) => ({
        ...prevInputClass,
        firstName: "",
      }));
    }
    // Need to add validation logic for other fields
    // If all validations pass, proceed with form submission
  }

  // useEffect(() => {
  //   // Perform an HTTP GET request to your server when the component mounts
  //   fetch("/login")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setServerData(data); // Update the state with the fetched data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); //Empty dependency array to fetch data only once when the component mounts

  // Handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // login logic here
  // };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <form className="registry">
        <h1 id="login-header">User Registration</h1>

        <Box display="flex" flexDirection={"column"} width={"100%"}>
          <TextField
            label="First Name"
            variant="filled"
            name="firstName"
            id="firstName"
            error={inputClass.firstName === "invalid"}
            helperText={inputClass.firstName === "invalid" ? "Invalid First Name" : ""}
          />
          <TextField
            label="Last Name"
            variant="filled"
            name="lastName"
            id="lastName"
          />
          <TextField
            label="Email"
            variant="filled"
            name="email"
            id="email"
            onBlur={handleEmailChange}
            error={inputClass.email === "invalid"}
            helperText={inputClass.email === "invalid" ? "Invalid Email" : ""}
          />
          <TextField
            label="Full Address"
            variant="filled"
            name="address"
            id="address"
          />
          <TextField
            label="Username"
            variant="filled"
            name="username"
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
        <div className="button-container">
          <Button variant="contained" id="registerMe" onClick={onSubmit}>
            Create NEW account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
