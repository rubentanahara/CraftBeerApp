import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Thread from '../../components/ui/Chat/Thread';
import styles from './styles';
import data from '../../assets/data/craftbeers.json';
import { COLORS, SIZES } from '../../constants';
const Inbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: SIZES.xxxLarge,
          color: COLORS.white,
        }}
      >
        Chats
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Thread msg={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Inbox;
