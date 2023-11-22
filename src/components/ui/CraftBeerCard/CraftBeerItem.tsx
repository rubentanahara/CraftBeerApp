import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import { SIZES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

const CraftBeerItem = ({ craftBeer }) => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  const imag =
    'https://images.unsplash.com/photo-1597822738124-151fb72dcb79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CarftBeerProfile', { item: craftBeer })
      }
      style={[styles.container, { width: width - SIZES.small }]}
    >
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: craftBeer.logo }} />

        <View style={{ flex: 1, marginHorizontal: SIZES.medium }}>
          <Text style={styles.craftbeerName}>{craftBeer.craftBeerName}</Text>

          <Text style={styles.address} numberOfLines={1}>
            {craftBeer.address}
          </Text>

          <Text style={styles.isOpenWrapper}>
            <Text style={styles.isOpen}>Open Now</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CraftBeerItem;
