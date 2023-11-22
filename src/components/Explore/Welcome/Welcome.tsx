import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.white, SIZES.medium)}>
        Tu cerveza artesanal favorita, a sólo un click.
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Ionicons name='ios-search' size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View>
            <TextInput
              style={styles.searchInput}
              placeholder='Buscar'
              onPressIn={() => navigation.navigate('Explore')}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MapView')}
          style={{
            backgroundColor: COLORS.red,
            height: 50,
            width: 100,
            borderRadius: 15,
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontFamily: 'semibold', color: COLORS.white }}>
            Mapa
          </Text>
          <Ionicons name='ios-map' size={SIZES.medium} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
