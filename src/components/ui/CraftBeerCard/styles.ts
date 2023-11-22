import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: SIZES.small,

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: SIZES.small,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: SIZES.medium,
    gap: SIZES.small,
    marginVertical: SIZES.medium,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  craftbeerName: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    marginVertical: SIZES.medium,
    color: COLORS.gray,
  },
  address: {
    fontSize: SIZES.medium,
  },
  isOpenWrapper: {
    fontSize: SIZES.medium,
    marginVertical: SIZES.medium,
  },
  isOpen: {
    fontFamily: 'bold',
    color: COLORS.red,
  },
});

export default styles;
