import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Courses from "./components/courses";
import Admin_courses from "./components/Admin_courses";
import Admin_users from "./components/Admin_users";
import Home from "./components/home";
import Users_Admin from "./components/users_admin";
import Users_Limited from "./components/users_limited";

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/admin_courses" element={<Admin_courses />} />
    <Route path="/admin_users" element={<Admin_users />} />
    <Route path="/users_admin" element={<Users_Admin />} />
    <Route path="/users_limited" element={<Users_Limited />} />
  </Routes>
);
export default AppRoutes;