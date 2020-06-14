import React from "react";
import { useLocation } from "react-router-native";
import get from "lodash/get";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavBar } from "../components/common";
import { Localizable } from "../lib";

const PostDetails = () => {
  const location = useLocation();

  const description = get(location, "state.description");
  const author = get(location, "state.author");
  const image = get(location, "state.image");
  const index = get(location, "state.index");

  return <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
    <NavBar title={Localizable.t("explore")} />
  </SafeAreaView>;
};

export default PostDetails;
