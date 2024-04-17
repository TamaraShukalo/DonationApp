import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    marginHorizontal: 24,
  },
  pressableImageContainer: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
  pressableImage: {
    height: 160,
    width: '100%',
  },
});
