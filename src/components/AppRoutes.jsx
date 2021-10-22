import React from "react";
import { Redirect, Route, Switch } from "react-router";

function AppRoutes ({routes}) {
  return(
    <Switch>
      {
        routes.map((route, index) => {
          return <Route key={index} {...route}/>
        })
      }
      <Redirect to="/error/404"/>
    </Switch>
  );
}

export default AppRoutes;