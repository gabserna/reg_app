import "../App.css";

function App() {
  return (
    <>
      <div className="registry">
        <h1 id="login-header">User Registration</h1>

        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName" />
<br />
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
<br />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
<br />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
<br />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
<br />
        <button type="submit">SAVE</button>
      </div>
    </>
  );
}

export default App;
