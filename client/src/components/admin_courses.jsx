import "../Style.css";

function App() {
  return (
    <>
      <div className="main">
        <h1 id="login-header">Admin Courses Details</h1>

        <h2>WHICH INFO GOES HERE????</h2>

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
            <td>sample</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Edit</button>
              <button>Save</button>
              <button>Delete</button>
            </td>
          </tbody>
        </table>
        <button>Create New Course</button>
      </div>
    </>
  );
}

export default App;
