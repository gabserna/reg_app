import { useState, useEffect } from "react";
import "../Style.css";

function Courses() {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("./classes")
      .then((response) => response.json())
      .then((data) => setClassesData(data))
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  return (
    <>
      <div className="main">
        <h1 id="login-header">Classes</h1>
        <table>
{/*      <thead>
            <tr>
              <th className="bold-header">Course ID</th>
              <th className="bold-header">Course Title</th>
              <th className="bold-header">Course Description</th>
              <th className="bold-header">Classroom Number</th>
              <th className="bold-header">Capacity</th>
              <th className="bold-header">Credit Hours</th>
              <th className="bold-header">Tuition Cost</th>
              <th className="bold-header">Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {classesData.map((classItem, index) => (
              <tr key={index}>
                <td>{classItem.course_id}</td>
                <td>{classItem.course_title}</td>
                <td id="course_description">{classItem.course_description}</td>
                <td>{classItem.classroom_number}</td>
                <td>{classItem.capacity}</td>
                <td>{classItem.credit_hours}</td>
                <td>{classItem.tuition_cost}</td>
                <td>
                  <p>select <input type="checkbox" name="" id="" /></p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Send Selection</button><br />
      </div>
    </>
  );
}
export default Courses;
