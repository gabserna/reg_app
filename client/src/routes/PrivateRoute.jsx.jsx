import PropTypes from 'prop-types'; // Importa PropTypes
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth(); // Usa el hook useAuth para obtener el estado de autenticación

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/pages/loginPage" />
      }
    />
  );
}

// Agrega validación de tipos usando PropTypes
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Validación para asegurarte de que component es un elemento React
};
export default PrivateRoute;