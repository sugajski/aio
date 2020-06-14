import { StyleSheet } from 'react-native';
import { Metrics } from '../../../themes';

export default StyleSheet.create({
  container: {
    height: 56,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  backButtonContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    width: 14,
    height: 18,
  },
  title: {
    position: 'absolute',
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    width: Metrics.screenWidth,
    textAlign: 'center',
  },
});
