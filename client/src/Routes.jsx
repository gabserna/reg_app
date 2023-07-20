import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/Login" component={Login} />
  </Switch>
);
export default Routes;