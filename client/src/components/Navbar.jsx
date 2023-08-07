import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
            <NavLink exact to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" activeClassName="active">
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="/userProfile" activeClassName="active">
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/courseFilter" activeClassName="active">
              Course Filter
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName="active">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminDashboard" activeClassName="active">
              AdminDashboard
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
