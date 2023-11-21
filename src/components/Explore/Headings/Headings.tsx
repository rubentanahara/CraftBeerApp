import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants';
import styles from './styles';

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nuevas cheves</Text>
        <TouchableOpacity>
          <Ionicons name='ios-grid' size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
