import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home'
import Login from '../pages/loginPage';
import Registration from '../pages/registrationPage';
import UserProfile from '../pages/userProfilePage';
import Courses from '../pages/coursesPage';
import AdminDashboard from '../pages/adminDashboardPage';
import NotFoundPage from '../pages/notFoundPage';
import withSpinner from '../components/spinner';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginWithSpinner />} />
    <Route path="/registration" element={<RegistrationWithSpinner />} />
    <Route path="/UserProfile" element={<UserProfilePageWithSpinner />} />
    <Route path="/courses" element={<CoursesWithSpinner />} />
    <Route path="/adminDashboard" element={<AdminDashboardWithSpinner />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

// Wrapping each component with the withSpinner HOC
const LoginWithSpinner = withSpinner(Login);
const RegistrationWithSpinner = withSpinner(Registration);
const UserProfilePageWithSpinner = withSpinner(UserProfile);
const CoursesWithSpinner = withSpinner(Courses);
const AdminDashboardWithSpinner = withSpinner(AdminDashboard);
export default AppRoutes;