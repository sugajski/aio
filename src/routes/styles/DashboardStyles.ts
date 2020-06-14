import { StyleSheet, ViewStyle } from 'react-native';
import { Metrics, Colors } from '../../themes';

interface IDashboardStylesProps {
  container: ViewStyle;
  loadingContainer: ViewStyle;
}

const DashboardStyles = StyleSheet.create<IDashboardStylesProps>({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.black,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardStyles;
