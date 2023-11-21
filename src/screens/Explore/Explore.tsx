import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Welcome from '../../components/Explore/Welcome';
import { COLORS } from '../../constants';
import Carousel from '../../components/Explore/Carousel';
import Headings from '../../components/Explore/Headings';
import ProductList from '../../components/ui/Products/ProductList';

const Explore = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location' size={24} color={COLORS.offwhite} />
          <Text style={styles.location}> Guadalajara </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>10</Text>
            </View>
            <TouchableOpacity>
              <Fontisto
                name='shopping-bag-1'
                size={24}
                color={COLORS.offwhite}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <Welcome />
          <Carousel />
          <Headings />
          <ProductList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
