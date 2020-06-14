import React from "react";
import { StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider as ReduxProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";
import { getApolloClient } from "./src/services";
import configureStore from "./src/redux/store";
import { Colors } from "./src/themes";

const store = configureStore();

if (__DEV__) {
  //@ts-ignore
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  const { client } = getApolloClient();

  if (!client) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client as any}>
        <ReduxProvider store={store}>
          <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
          <Routes />
        </ReduxProvider>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
