import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import Admin_courses from "./components/Admin_courses";
import Admin_users from "./components/Admin_users";

const AppRoutes = () => (
  <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/admin_courses" element={<Admin_courses />} />
    <Route path="/admin_users" element={<Admin_users />} />
  </Routes>
);

export default AppRoutes;
