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
        <th>Email</th>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Telephone</th>
        <th>Address</th>
        </thead>
        <tbody>
        <td>username info</td>
        <td>email info</td>
        <td>lastname info</td>
        <td>firstname info</td>
        <td>Tel</td>
        <td>Address</td>
        </tbody>
      </table>
        <button>Edit</button>
        <button>Save</button>
    
      
    
      
    </div>
    </>
  );
}

export default App;
