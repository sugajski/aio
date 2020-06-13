import React from "react";
import { View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { POSTS_QUERY } from "../graphql/queries";

const Dashboard = () => {
  const { data } = useQuery(POSTS_QUERY, {
    fetchPolicy: "cache-first",
  });
  return <View />;
};

export default Dashboard;
