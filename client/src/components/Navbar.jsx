import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/GlobalStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faHouse } from "@fortawesome/free-solid-svg-icons";

function darkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const newDarkMode = !isDarkMode;
  localStorage.setItem("darkMode", newDarkMode);
  document.body.classList.toggle("dark-mode", newDarkMode);
}

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    darkMode();
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
            <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" activeclassname="active">
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeclassname="active">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/userProfile" activeclassname="active">
              MyProfile
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminDashboard" activeclassname="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <button
              id="darkModeButton"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
