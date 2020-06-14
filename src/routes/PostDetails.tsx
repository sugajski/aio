import React from "react";
import { View } from "react-native";
import { useLocation } from "react-router-native";
import get from "lodash/get";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as CachedImage } from "react-native-expo-image-cache";

import { NavBar } from "../components/common";
import { Localizable } from "../lib";
import { DescriptionSection } from '../components';
import PostDetailsStyles from './styles/PostDetailsStyles';

const PostDetails = () => {
  const location = useLocation();

  const description = get(location, "state.description");
  const author = get(location, "state.author");
  const image = get(location, "state.image");
  const index = get(location, "state.index");

  return (
    <SafeAreaView style={PostDetailsStyles.container}>
      <NavBar title={Localizable.t("explore")} />
      <CachedImage uri={image} style={PostDetailsStyles.image} />
      <View style={PostDetailsStyles.details}>
        <DescriptionSection author={author} description={description} />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;
