import {StyleSheet} from 'react-native';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 24,
  },
  headerText: {
    ...font(16, 19, 'regular', 'grey'),
    marginBottom: 5,
  },
  profileImage: {
    height: 50,
    width: 50,
  },
});
