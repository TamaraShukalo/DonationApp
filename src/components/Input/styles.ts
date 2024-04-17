import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  label: {
    ...font(12, 15, 'regular', 'darkBlueGrey'),
  },
  input: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey50,
  },
});
