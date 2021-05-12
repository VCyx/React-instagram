import { Switch, Route} from "react-router-dom";
import Login from "../page/Login/Login";
import Page404 from "../page/404/Page404";
import Main from "../page/Main/Main";
import Profile from "../page/Profile/Profile";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path='/user/:name' component={Profile} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
};

export default Routes;
