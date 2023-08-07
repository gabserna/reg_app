//import React from 'react';
import { Route, Routes } from 'react-router-dom';
import withSpinner from '../components/spinner'; // Importa el HOC
import Login from '../components/Login';
import Registration from '../components/Registration';
import UserProfile from '../components/UserProfile';
import Courses from '../components/courses';
import AdminDashboard from '../components/AdminDashboard';


const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginWithSpinner />} />
    <Route path="/registration" element={<RegistrationWithSpinner />} />
    <Route path="/userProfile" element={<UserProfileWithSpinner />} />
    <Route path="/courses" element={<CoursesWithSpinner />} />
    <Route path="/adminDashboard" element={<AdminDashboardWithSpinner />} />
    
    
    
  </Routes>
);

// Wrapping each component with the withSpinner HOC
const LoginWithSpinner = withSpinner(Login);
const RegistrationWithSpinner = withSpinner(Registration);
const UserProfileWithSpinner = withSpinner(UserProfile);
const CoursesWithSpinner = withSpinner(Courses);
const AdminDashboardWithSpinner = withSpinner(AdminDashboard);
export default AppRoutes;