import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from "../componentes/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  const {user} = useContext(AuthContext);

    return (
        <Router>
      <div>
        <Switch>
          <PublicRoute
            exact 
            path="/login" 
            component={LoginScreen}
            isAutenticated={ user.logged}
             />
          <PrivateRoute 
            path="/" 
            component={DashBoardRoutes}
            isAutenticated={ user.logged} />
        </Switch>
      </div>
    </Router>
    )
}
