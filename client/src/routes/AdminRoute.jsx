//import { Route } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthFunctions';

function AdminRoute({ component: Component, ...rest }) {
  const { isAuthenticated, userRoles } = useAuth();
  const isAdmin = userRoles.includes('admin');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="./pages/loginPage" />
        )
      }
    />
  );
}

// Agrega validaciones prop-types para las propiedades
AdminRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AdminRoute;