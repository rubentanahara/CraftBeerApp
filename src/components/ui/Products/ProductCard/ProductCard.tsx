import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();
  const imag =
    'https://instagram.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/383424429_694769659347101_6304947905056904829_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTgweDE0NzUuc2RyIn0&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4WnVmMwesBkAX9BOr-H&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIwMTM5MTMxNzAxNjE3MDY4Mw%3D%3D.2-ccb7-5&oh=00_AfBY0m_8iHeGwrLxw_X1xDiYnMQIQV_MK5Y5mIqihDXx0g&oe=655FD7DB&_nc_sid=b41fef';
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imag }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Lycan Lupus
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Fauna
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
