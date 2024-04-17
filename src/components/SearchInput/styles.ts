import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 15,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    height: '100%',
    ...font(14, 14, 'regular', 'grey'),
  },
});
