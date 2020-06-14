import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Metrics, Colors } from "../../themes";

interface IPostDetailsStylesProps {
  container: ViewStyle;
  image: ImageStyle;
  details: ViewStyle;
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
});

export default PostDetailsStyles;
