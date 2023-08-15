import { useState } from "react";
import TogglePassword from "../components/TogglePassword";
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
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
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className="main">
        <form className="registry">
          <h1 id="login-header">User Registration</h1>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className={inputClass.firstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onBlur={handleEmailChange}
            className={inputClass.email}
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Full Address"
          />
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="User Name"
          />
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TogglePassword
              showPassword={showPassword}
              togglePassword={togglePassword}
            />
          </div>

          <div className="button-container">
            <button id="registerMe" type="submit" onClick={onSubmit}>
              Create NEW account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Registration;