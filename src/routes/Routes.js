import { Switch, Route } from "react-router-dom";
import Login from "../page/Login/Login";
import Page404 from "../page/404/Page404";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" to={Login} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
};

export default Routes;
