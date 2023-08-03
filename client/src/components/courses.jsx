import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import "../Style.css";

function Courses() {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("./classes")    //how to call from server port 3001 ??
      .then((response) => response.json())
      .then((data) => setClassesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="main">
        <h1 id="login-header">Courses</h1>
        <table>

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

export default Courses;