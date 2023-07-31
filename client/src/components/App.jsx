import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes.jsx";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}
export default App;