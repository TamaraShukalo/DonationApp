import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backButton: {
    marginHorizontal: 14,
    marginTop: 7,
  },
  inputs: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
    gap: 24,
  },
  errorText: {
    ...font(16, 19, 'regular', 'red'),
  },
  successText: {
    ...font(16, 19, 'regular', 'green'),
  },
});
