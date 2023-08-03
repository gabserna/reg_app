import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}
export default App;