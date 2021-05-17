import {Switch, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "./AuthRoute";
import {useSelector} from "react-redux";

const Routes = () => {

    let isAuth = useSelector((state) => state.userReducer.users.isAuth);

    console.log(isAuth)
    return (
        <>
            <Switch>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </Switch>
        </>
    );
};

export default Routes;
