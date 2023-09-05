import PropTypes from 'prop-types';
//import { Route } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthFunctions';

function PrivateRoute({ component: Component, ...rest }) {
  //hook useAuth to get auth state
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="../pages/coursesPage" />
      }
    />
  );
}

//add validation using PropTypes
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
export default PrivateRoute;