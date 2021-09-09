import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AuthRoute from "./route";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./index";
import { COLOR } from "./src/Theme/Colors";
import { Splash } from "./src/screens";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Splash/>;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <AuthRoute />
          <StatusBar
            style="light"
            translucent={true}
            backgroundColor={COLOR.Black}
          />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
