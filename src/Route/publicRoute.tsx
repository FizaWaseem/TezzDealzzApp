import React, { FC, useEffect, useState } from "react";
import { Route, useHistory, Redirect, RouteProps } from "react-router-native";
import { getToken } from "../utils/general.utils";
type Public = {
  component: React.ComponentType;
} & RouteProps;

const PublicRoute: FC<Public> = ({ component: Component, ...rest }: Public) => {
  const history = useHistory();
  useEffect(() => {
    console.log("Pubicroute=", history.location.pathname);
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState<any>("");
  useEffect(() => {
    getToken().then((token) => {
      setIsLoggedIn(token);
      console.log(token);
    });
  }, []);
  if (isLoggedIn === "") {
    return null;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
