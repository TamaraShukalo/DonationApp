import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.darkGreen,
    justifyContent: 'center',
    height: 22,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  text: {
    ...font(10, 12, 'semiBold', 'white'),
    textAlign: 'center',
  },
});
