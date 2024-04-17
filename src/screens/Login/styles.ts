import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inputs: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
    gap: 24,
  },
  registrationButton: {
    alignItems: 'center',
  },
  errorText: {
    ...font(16, 19, 'regular', 'red'),
  },
});
