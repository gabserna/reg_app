import NavBar from "./Navbar";
import "../Style.css";

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
            <th>Actions</th>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Edit</button>
              <button>Save</button>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
