import { useState } from "react";
import "../styles/GlobalStyles.css";

function Registration() {
  // Cambia el nombre de la función a "Registration"
  const [showPassword] = useState(false);
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

    //Check if the first name is empty
    if (!inputClass.firstName) {
      // Cambia "firstName" a "inputClass.firstName"
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
    // Add further validation logic for other fields here
    // If all validations pass, you can proceed with form submission
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
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
          />
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

export default Registration; // Cambia el nombre de la exportación a "Registration"
