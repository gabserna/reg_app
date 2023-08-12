import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
//import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthFunctions';

function PrivateRoute({ component: Component, ...rest }) {
  // Usa el hook useAuth para obtener el estado de autenticación
  const { isAuthenticated } = useAuth();

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
  // Validación para asegurarte de que component es un elemento React
  component: PropTypes.elementType.isRequired,
};
export default PrivateRoute;