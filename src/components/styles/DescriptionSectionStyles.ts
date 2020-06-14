import { StyleSheet, TextStyle } from 'react-native';
import { Colors } from '../../themes';

interface IDescriptionSectionStylesProps {
  author: TextStyle;
  description: TextStyle;
}

const DashboardStyles = StyleSheet.create<IDescriptionSectionStylesProps>({
  author: {
    color: Colors.white,
    lineHeight: 24,
    fontWeight: "700",
  },
  description: {
    color: Colors.white,
    lineHeight: 24,
  },
});

export default DashboardStyles;
