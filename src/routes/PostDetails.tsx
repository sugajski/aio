import React from "react";
import { View } from "react-native";
import { useLocation } from "react-router-native";
import get from "lodash/get";

const PostDetails = () => {
  const location = useLocation();

  const description = get(location, "state.description");
  const author = get(location, "state.author");
  const image = get(location, "state.image");
  const index = get(location, "state.index");
  
  console.log('image: ', image);

  return <View style={{ flex: 1, backgroundColor: "red" }} />;
};

export default PostDetails;
