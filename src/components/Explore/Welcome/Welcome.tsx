import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.white, SIZES.medium)}>
        Tu cerveza artesanal favorita, a sólo un click.
      </Text>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name='search' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.searchInput}
            placeholder='Buscar'
            onPressIn={() => navigation.navigate('Explore')}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
