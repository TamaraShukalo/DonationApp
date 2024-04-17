import {StyleSheet} from 'react-native';
import {font} from '../../utils/font';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    ...font(16, 19, 'medium', 'white'),
    textAlign: 'center',
  },
});
