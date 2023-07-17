import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
// import "bootstrap/dist/css/bootstrap.min.css";

// renders the component inside the Route element to be used in the app's routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
export default App;