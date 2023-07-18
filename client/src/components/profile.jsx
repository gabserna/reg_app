import React, { useState, useEffect } from "react";
import "../App.css";

function App() {
  return (
    <>
      <div className="main">
        <h1 id="login-header">User Profile</h1>
        <table>
          <thead>
            <th>UserName</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Courses</th>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>

        <button>Edit</button>
        <button>Save</button>
      </div>
    </>
  );
}

export default App;
