import "../styles/GlobalStyles.css";

function UserProfile() {
  return (
    <>
      <div className="main">
        <h1 id="login-header">User Profile</h1>
        <table>
          <thead>
            <th>UserName</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Courses</th>
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

export default UserProfile;
