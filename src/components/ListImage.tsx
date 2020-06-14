import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { Image as CachedImage } from "react-native-expo-image-cache";

import ListImageStyles from "./styles/ListImageStyles";

interface IListImageProps {
  uri: string;
  onPress: () => void;
}

const ListImage: FC<IListImageProps> = ({ uri, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <CachedImage uri={uri} style={ListImageStyles.image} />
  </TouchableOpacity>
);

export default ListImage;
