import React from "react";
import "./App.css";

function App() {
  return (
    <>
    <div className="main">
      <h1 id="login-header">Admin Courses Details</h1>
      <table>
        <thead>
        <th>Course ID</th>
        <th>Course Title</th>
        <th>Course Description</th>
        <th>Classroom Number</th>
        <th>Capacity</th>
        <th>Credit Hours</th>
        <th>Tuition Cost</th>
        <th>Changes</th>
        </thead>
        <tbody>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td><button>Edit</button>
        <button>Save</button>
        <button>Delete</button></td>
        </tbody>
      </table>
      <button>Create New Course</button>
    </div>
    </>
  );
}

export default App;
