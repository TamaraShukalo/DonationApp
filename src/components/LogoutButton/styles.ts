import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 24,
    marginVertical: 10,
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderColor: COLORS.blue,
    borderWidth: 1,
  },
});
