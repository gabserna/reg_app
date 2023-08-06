import React from 'react';
import { Route, Routes } from 'react-router-dom';
import withSpinner from './components/spinner'; // Importa el HOC
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Courses from './components/courses';
import Admin_courses from './components/Admin_courses';
import Admin_users from './components/Admin_users';
import Home from './components/home';
import Users_Admin from './components/users_admin';
import Users_Limited from './components/users_limited';

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<HomeWithSpinner />} />
    <Route path="/Login" element={<LoginWithSpinner />} />
    <Route path="/Register" element={<RegisterWithSpinner />} />
    <Route path="/profile" element={<ProfileWithSpinner />} />
    <Route path="/courses" element={<CoursesWithSpinner />} />
    <Route path="/admin_courses" element={<AdminCoursesWithSpinner />} />
    <Route path="/admin_users" element={<AdminUsersWithSpinner />} />
    <Route path="/users_admin" element={<UsersAdminWithSpinner />} />
    <Route path="/users_limited" element={<UsersLimitedWithSpinner />} />
  </Routes>
);

// Wrapping each component with the withSpinner HOC
const HomeWithSpinner = withSpinner(Home);
const LoginWithSpinner = withSpinner(Login);
const RegisterWithSpinner = withSpinner(Register);
const ProfileWithSpinner = withSpinner(Profile);
const CoursesWithSpinner = withSpinner(Courses);
const AdminCoursesWithSpinner = withSpinner(Admin_courses);
const AdminUsersWithSpinner = withSpinner(Admin_users);
const UsersAdminWithSpinner = withSpinner(Users_Admin);
const UsersLimitedWithSpinner = withSpinner(Users_Limited);

export default AppRoutes;