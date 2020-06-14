import { StyleSheet, ImageStyle } from 'react-native'

import { Colors, Metrics } from '../../themes';


interface IListImageStylesProps {
  image: ImageStyle;
}

const imageSize = (Metrics.screenWidth / 3);

const ListImageStyles = StyleSheet.create<IListImageStylesProps>({
  image: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderColor: Colors.black,
  },
});

export default ListImageStyles;