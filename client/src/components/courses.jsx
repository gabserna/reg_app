import React, { useState, useEffect } from "react";
//import NavBar from "./Navbar";
import "../Style.css";

function App() {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/classes")
      .then((response) => response.json())
      .then((data) => setClassesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="main">
        <h1 id="login-header">Courses</h1>
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Course Description</th>
              <th>Classroom Number</th>
              <th>Capacity</th>
              <th>Credit Hours</th>
              <th>Tuition Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classesData.map((classItem, index) => (
              <tr key={index}>
                <td>{classItem.course_id}</td>
                <td>{classItem.course_title}</td>
                <td>{classItem.course_description}</td>
                <td>{classItem.classroom_number}</td>
                <td>{classItem.capacity}</td>
                <td>{classItem.credit_hours}</td>
                <td>{classItem.tuition_cost}</td>
                <td>
                  <button>Edit</button>
                  <button>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
