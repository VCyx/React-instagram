import {Switch, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "./AuthRoute";


const Routes = (isAuths) => {
    /** Нужно витянуть из стореджа isAuth  и заменть isAuths, Routes = ('isAuths' <-- єто удалить ) **/
    let isAuth = isAuths;


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
