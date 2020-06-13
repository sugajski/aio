import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider as ReduxProvider } from "react-redux";

import Routes from "./src/routes";
import { getApolloClient } from "./src/services";
import configureStore from "./src/redux/store";

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
    <ApolloProvider client={client as any}>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </ApolloProvider>
  );
}
