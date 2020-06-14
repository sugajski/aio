import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image as RNImage,
  AsyncStorage,
} from "react-native";
import { useLocation } from "react-router-native";
import get from "lodash/get";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as CachedImage } from "react-native-expo-image-cache";
import { useSelector, useDispatch } from "react-redux";

import { NavBar } from "../components/common";
import { Localizable } from "../lib";
import { Images } from "../themes";
import { DescriptionSection } from "../components";
import { toggleLike, saveLikes } from "../redux/actions";
import PostDetailsStyles from "./styles/PostDetailsStyles";

const LIKES_KEY = "postDetails.likes";

const PostDetails = () => {
  const { likes } = useSelector((state: any) => state.likes);
  const dispatch = useDispatch();
  const location = useLocation();

  const description = get(location, "state.description");
  const author = get(location, "state.author");
  const image = get(location, "state.image");
  const index = get(location, "state.index");

  const postLikesInfo = likes.find((item: ILike) => item.index === index);
  const isPostLiked = !!postLikesInfo && postLikesInfo.like;

  useEffect(() => {
    if (likes.length === 0) {
      AsyncStorage.getItem(LIKES_KEY)
        .then((savedLikes) => {
          if (savedLikes) {
            const parsedLikes = JSON.parse(savedLikes);
            if (parsedLikes.length > 0) {
              dispatch(saveLikes(parsedLikes));
            }
          }
        })
        .catch(() => {});
    }
  }, []);

  const handlePostLike = () => {
    dispatch(toggleLike(index));
  };

  return (
    <SafeAreaView style={PostDetailsStyles.container}>
      <NavBar title={Localizable.t("explore")} />
      <CachedImage uri={image} style={PostDetailsStyles.image} />
      <View style={PostDetailsStyles.details}>
        <TouchableOpacity onPress={handlePostLike}>
          <View style={PostDetailsStyles.likesContainer}>
            <RNImage
              source={isPostLiked ? Images.heartLiked : Images.heartDefault}
              style={PostDetailsStyles.likeIcon}
            />
            <Text style={PostDetailsStyles.commonText}>
              {isPostLiked ? Localizable.t("liked") : Localizable.t("likeIt")}
            </Text>
          </View>
        </TouchableOpacity>
        <DescriptionSection author={author} description={description} />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;
