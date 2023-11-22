import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import ProfileHeader from './ProfileHeader';
import Headings from '../../components/Explore/Headings';
import ProductList from '../../components/ui/Products/ProductList';
import Carousel from '../../components/Explore/Carousel';

const CraftBeerProfile = () => {
  const [like, setLike] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          marginHorizontal: SIZES.medium,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: SIZES.xxLarge + 30,
          width: SIZES.width - 44,
          zIndex: 999,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={35} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLike((p) => !p)}>
          <Ionicons
            name={like ? 'heart' : 'heart-outline'}
            size={35}
            color={like ? COLORS.red : COLORS.black}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../assets/images/malditoConsueloLogo.png')}
        style={{
          top: -SIZES.xxxLarge * 2,
          height: '50%',
          aspectRatio: 1,
        }}
      />
      <View
        style={{
          flex: 1,
          height: '100%',
          marginTop: -SIZES.xxxLarge * 5,
          backgroundColor: '#161616',
          width: SIZES.width,
          borderTopLeftRadius: SIZES.medium,
          borderTopRightRadius: SIZES.medium,
          paddingTop: SIZES.medium,
        }}
      >
        <ProfileHeader />
        <ScrollView style={{ padding: SIZES.medium }}>
          <Headings title={'Eventos Proximos'} />
          <Carousel />
          <Headings title={'Nuestras Cervezas'} />
          <ProductList />
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CraftBeerProfile;
