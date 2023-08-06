import React, { useState } from "react"; // Importa useState aquí
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
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName="active">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin_courses" activeClassName="active">
              Admin Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin_users" activeClassName="active">
              Admin Users
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
