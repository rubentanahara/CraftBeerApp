import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = () => {
  const [count, setCount] = useState<number>(6);
  const [like, setLike] = useState<boolean>(false);

  const navigation = useNavigation();

  function increment() {
    setCount((p) => p + 6);
  }
  function decrement() {
    if (count > 0) {
      setCount((p) => p - 6);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={35} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLike((p) => !p)}>
          <Ionicons
            name='heart'
            size={35}
            color={like ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://instagram.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/383424429_694769659347101_6304947905056904829_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTgweDE0NzUuc2RyIn0&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4WnVmMwesBkAX9BOr-H&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIwMTM5MTMxNzAxNjE3MDY4Mw%3D%3D.2-ccb7-5&oh=00_AfBY0m_8iHeGwrLxw_X1xDiYnMQIQV_MK5Y5mIqihDXx0g&oe=655FD7DB&_nc_sid=b41fef',
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Fauna</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$99 MXN</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name='star' size={24} color={'gold'} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Acerca de</Text>
          <Text style={styles.descriptionBody}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='location-outline' size={20} />
              <Text> Mexicali, Baja California</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text> Envío Gratis </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: SIZES.medium,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontFamily: 'bold', fontSize: SIZES.xLarge }}>
            Cantidad
          </Text>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name='minus' size={30} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name='plus' size={30} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
            <Text style={styles.cartTitle}>COMPRAR AHORA</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto
              name='shopping-bag-1'
              size={22}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
