import { useState, useEffect } from "react";
import "../styles/GlobalStyles.css";

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
