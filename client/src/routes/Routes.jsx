import { Route, Routes } from 'react-router-dom';
import withSpinner from '../components/spinner'; // Importa el HOC
import Login from '../pages/loginPage';
import Registration from '../pages/registrationPage';
import UserProfile from '../pages/userProfilePage';
import Courses from '../pages/coursesPage';
import AdminDashboard from '../pages/adminDashboardPage';


const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginWithSpinner />} />
    <Route path="/registration" element={<RegistrationWithSpinner />} />
    <Route path="/userProfilePage" element={<UserProfilePageWithSpinner />} />
    <Route path="/courses" element={<CoursesWithSpinner />} />
    <Route path="/adminDashboard" element={<AdminDashboardWithSpinner />} />
  </Routes>
);

// Wrapping each component with the withSpinner HOC
const LoginWithSpinner = withSpinner(Login);
const RegistrationWithSpinner = withSpinner(Registration);
const UserProfilePageWithSpinner = withSpinner(UserProfile);
const CoursesWithSpinner = withSpinner(Courses);
const AdminDashboardWithSpinner = withSpinner(AdminDashboard);
export default AppRoutes;