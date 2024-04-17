import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  informationContainer: {
    marginHorizontal: 24,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 5,
    marginVertical: 12,
  },
  badge: {
    marginTop: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    marginTop: 7,
    ...font(14, null, 'regular', 'black'),
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
});
