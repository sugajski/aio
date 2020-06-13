import React from "react";
import { StyleSheet } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./src/routes";
import { getApolloClient } from "./src/services";

if (__DEV__) {
  //@ts-ignore
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  const { client } = getApolloClient();
  return (
    <ApolloProvider client={client as any}>
      <Routes />
    </ApolloProvider>
  );
}
