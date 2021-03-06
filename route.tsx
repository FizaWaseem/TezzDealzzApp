import React, { FC, useState, useEffect } from "react";
import { Public } from "./src/utils/constants/path";
import Navigation from "./src/navigation/index";
import { BackButton, NativeRouter } from "react-router-native";
import PublicRoute from "./src/Route/publicRoute";
import { getToken } from "./src/utils/general.utils";
import { Splash } from "./src/screens";
interface prop {
  component: any;
}
const AuthRoute: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>("");
  useEffect(() => {
    getToken().then((token) => {
      setIsLoggedIn(token);
      console.log(token);
    });
  }, []);
  if (isLoggedIn === "") {
    return <Splash />;
  }
  return (
    <NativeRouter>
      <Navigation />
      {Public.map((route) => {
        return (
          <BackButton>
            <PublicRoute
              exact
              path={route.path}
              key={route.id}
              component={route.component}
            />
          </BackButton>
        );
      })}
    </NativeRouter>
  );
};

export default AuthRoute;
