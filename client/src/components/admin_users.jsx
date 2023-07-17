import React from "react";
import "./App.css";

function App() {
  return (
    <>
    <div className="main">
      <h1 id="login-header">admin page</h1>

      
      <table>
        <thead>
        <th>ID</th>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Telephone</th>
        <th>Address</th>
        <th>Courses</th>
        <th>Changes</th>
        </thead>
        <tbody>
        <td>id</td>
        <td>last</td>
        <td>first</td>
        <td>tel</td>
        <td>address</td>
        <td>courses</td>
        <td><button>Edit</button>
        <button>Save</button>
        <button>Delete</button></td>
        </tbody>
      </table>
      <button>Create New User</button>
      
    
      
    </div>
    </>
  );
}

export default App;
