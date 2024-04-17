import {StyleSheet} from 'react-native';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 24,
  },
  column: {
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    ...font(16, 19, 'regular', 'grey'),
  },
});
