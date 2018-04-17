import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  empty: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 14,
    marginTop: metrics.basePadding,
  },
});
