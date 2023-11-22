import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.xSmall,
  },
  image: {
    height: SIZES.xxxLarge,
    width: SIZES.xxxLarge,
    borderRadius: 30,
    marginRight: SIZES.medium,
  },
  badgeContainer: {
    backgroundColor: COLORS.red,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'bold',
    fontSize: 18,
    marginBottom: 3,
    color: COLORS.white,
  },
  text: {
    fontFamily: 'regular',
    color: COLORS.gray2,
  },
});

export default styles;
