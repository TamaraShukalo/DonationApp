import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  tab: {
    backgroundColor: COLORS.primaryBlue,
    justifyContent: 'center',
    marginTop: 16,
    marginRight: 10,
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 33,
  },
  text: {
    ...font(14, 17, 'medium', 'white'),
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: COLORS.lightGrey,
  },
  inactiveText: {
    color: COLORS.mediumGrey,
  },
});
