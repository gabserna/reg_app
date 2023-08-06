import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes.jsx';
import NavBar from './components/Navbar.jsx';

function Index() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root')); // Asegúrate de tener un elemento con el id 'root' en tu archivo HTML
