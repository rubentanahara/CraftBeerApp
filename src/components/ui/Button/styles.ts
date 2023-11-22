import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    //border
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    borderWidth: 1,
    //alignment
    flex: 1,
    padding: 10,
  },
  text: {
    color: COLORS.white,
    fontFamily: 'bold',
  },
});
