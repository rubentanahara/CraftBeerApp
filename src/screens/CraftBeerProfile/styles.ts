import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: SIZES.xxxLarge,
    width: SIZES.xxxLarge * 2,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginBottom: SIZES.small,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: 'semibold',
  },
  root: {
    padding: SIZES.small,
  },
  username: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: 'semibold',
  },
  ubi: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: 'reagular',
    paddingBottom: SIZES.small,
  },
});

export default styles;
