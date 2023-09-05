import React, { useState } from "react";
import { TextField, FormControl, InputLabel, FilledInput, Button, Box, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/GlobalStyles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [inputClass, setInputClass] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    userName: "",
    password: "",
  });

  // Define los campos requeridos
  const requiredFields = ["firstName", "lastName", "userName", "password"];

  // Función para verificar si hay campos vacíos
  const isAnyFieldEmpty = () => {
    for (const field of requiredFields) {
      if (inputClass[field] === "") {
        return true;
      }
    }
    return false;
  };

  function validateEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(input);
  }

  function handleBlur(fieldName, event) {
    const { name, value } = event.target;
    if (name === "email") {
      const isValidEmail = validateEmail(value);
      setInputClass((prevInputClass) => ({
        ...prevInputClass,
        [name]: isValidEmail ? "" : "invalid",
      }));
    } else {
      setInputClass((prevInputClass) => ({
        ...prevInputClass,
        [name]: value.trim() === "" ? "invalid" : "",
      }));
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    //escribe una validacion para que el usuario no se registre si hay campos vacios



    // Verifica que ningún campo obligatorio esté en blanco
    const requiredFields = ["firstName", "lastName", "userName", "password"];
    let isAnyFieldInvalid = false;

    requiredFields.forEach((field) => {
      if (inputClass[field] === "invalid" || inputClass[field] === "") {
        setInputClass((prevInputClass) => ({
          ...prevInputClass,
          [field]: "invalid",
        }));
        isAnyFieldInvalid = true;
      }
    });

    if (isAnyFieldInvalid) {
      toast.error("Please complete all required fields.");
    } else {
      toast.success("Registration successful!");
    }
  }



  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <form className="registry" onSubmit={onSubmit}>
        <h1 id="login-header">User Registration</h1>

        <Box display="flex" flexDirection="column" width="100%">
          <TextField
            label="First Name"
            variant="filled"
            name="firstName"
            id="firstName"
            required
            error={inputClass.firstName === "invalid"}
            helperText={inputClass.firstName === "invalid" ? "Required" : ""}
          />
          <TextField
            label="Last Name"
            variant="filled"
            name="lastName"
            id="lastName"
            required
            error={inputClass.lastName === "invalid"}
            helperText={inputClass.lastName === "invalid" ? "Required" : ""}
          />
          <TextField
            label="Email"
            variant="filled"
            name="email"
            id="email"
            required
            onBlur={(e) => handleBlur("email", e)}
            error={inputClass.email === "invalid"}
            helperText={inputClass.email === "invalid" ? "Invalid Email" : ""}
          />
          <TextField
            label="Full Address"
            variant="filled"
            name="address"
            id="address"
            required
          />
          <TextField
            label="Phone Number"
            variant="filled"
            name="phone"
            id="phone"
            required
          />
          <TextField
            label="Username"
            variant="filled"
            name="userName"
            id="userName"
            // error={inputClass.userName === "invalid"}
            // helperText={inputClass.userName === "invalid" ? "Required" : ""}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={(e) => handleBlur("userName", e)}
          />
          <FormControl sx={{ mt: 0 }} variant="filled">
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
          <Button
          variant="contained"
          id="registerMe"
          type="submit"
          >
            Create a New Account
          </Button>
        </div>
      </form>
      {/* Agrega el componente ToastContainer al final */}
      <ToastContainer />
    </div>
  );
}

export default Registration;
