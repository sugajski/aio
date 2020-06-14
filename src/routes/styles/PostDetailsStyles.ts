import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Metrics, Colors } from "../../themes";

interface IPostDetailsStylesProps {
  container: ViewStyle;
  image: ImageStyle;
  details: ViewStyle;
  commonText: TextStyle;
  likesContainer: ViewStyle;
  likeIcon: ImageStyle;
}

const PostDetailsStyles = StyleSheet.create<IPostDetailsStylesProps>({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.black,
    justifyContent: "flex-start",
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth,
  },
  details: {
    margin: 16,
  },
  commonText: {
    color: Colors.white,
    lineHeight: 24,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  likeIcon: {
    width: 13,
    height: 13,
    marginRight: 8,
  },
});

export default PostDetailsStyles;
