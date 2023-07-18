import React, { useState, useEffect } from "react";
import "../App.css";

function App() {
  return (
    <>
      <div className="main">
        <h1 id="login-header">Courses</h1>
        <table>
          <thead>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Course Description</th>
            <th>Classroom Number</th>
            <th>Capacity</th>
            <th>Credit Hours</th>
            <th>Tuition Cost</th>
          </thead>
          <tbody>
            <td>sample</td>
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
