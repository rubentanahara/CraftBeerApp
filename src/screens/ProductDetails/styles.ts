import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge + 30,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    marginTop: -SIZES.large,
    backgroundColor: '#161616',
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    paddingTop: SIZES.medium,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    padding: SIZES.small,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
  },
  ratingRow: {
    marginHorizontal: SIZES.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  quantityText: {
    fontFamily: 'medium',
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descriptionTitle: {
    fontFamily: 'semibold',
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  descriptionBody: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
    color: COLORS.white,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: 10,
    padding: SIZES.small,
    borderRadius: SIZES.medium,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width,
  },
  cartButton: {
    width: SIZES.width * 0.5,
    backgroundColor: COLORS.black,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    marginLeft: SIZES.small,
  },
  cartTitle: {
    marginLeft: SIZES.small,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  addCart: {
    height: SIZES.xxxLarge,
    width: SIZES.xxxLarge,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.black,
    margin: SIZES.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
