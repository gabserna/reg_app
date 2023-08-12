import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/Navbar.jsx';
import AppRoutes from './routes/Routes.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
export default App;