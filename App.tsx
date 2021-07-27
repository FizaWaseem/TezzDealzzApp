import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Props } from 'react';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AuthRoute from "./route";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/utils/constants/resources/useCachedResources';


export default function App() {

    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
      return null;
    } else {
    return (
        <Provider store={store}>
      <SafeAreaProvider>
      <AuthRoute/>
    <StatusBar style="light" translucent={true} backgroundColor={'black'}/>
  </SafeAreaProvider>
          </Provider>
           
          );
        }
    }
