import { createContext, useState } from 'react';
const AuthContext = createContext();
import PropTypes from 'prop-types';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Lógica para autenticar al usuario
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lógica para desautenticar al usuario
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;