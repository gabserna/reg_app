//import NavBar from "./Navbar";
import "../Style.css";

function Registry() {
  return (
    <>
      <div className="registry">
        <h1 id="login-header">User Registration</h1>
        <input type="text" name="firstName" id="firstName" placeholder="First Name" />
        <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <input type="text" name="address" id="address" placeholder="Address" />
        <input type="text" name="userName" id="userName" placeholder="User Name" />
        <input type="text" name="password" id="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default Registry;
