//import React from "react";
import { NavLink } from "react-router-dom";
import "../Style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function darkMode() {
  // Get the current state of dark mode from localStorage (if any)
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Toggle the dark mode
  const newDarkMode = !isDarkMode;

  // Save the new dark mode state to localStorage
  localStorage.setItem("darkMode", newDarkMode);

  // Update the class of the document.body based on the new dark mode state
  document.body.classList.toggle("dark-mode", newDarkMode);
}



function NavBar() {
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
              Courses
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
            {/* Use onClick to call the darkMode function */}
            <button
              id="darkModeButton"
              onClick={darkMode}
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;