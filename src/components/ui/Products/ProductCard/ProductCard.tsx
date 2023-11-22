import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();
  const imag =
    'https://images.unsplash.com/photo-1597822738124-151fb72dcb79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imag }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Nombre
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Maldito Consuelo
          </Text>
          <Text style={styles.price}>$90 MXN </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name='add-circle' size={35} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
