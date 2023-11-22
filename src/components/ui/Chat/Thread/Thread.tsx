import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Thread = ({ msg }) => {
  function convertToHourMinute(dateTimeStr) {
    const dateObj = new Date(dateTimeStr);
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = hours.toString().padStart(2, '0');
    return `${formattedHours}:${minutes} ${ampm}`;
  }
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Messages')}
      style={styles.container}
    >
      <Image
        source={{
          uri: msg.logo,
        }}
        style={styles.image}
      />

      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{msg.unseenCount}</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{msg.craftBeerName}</Text>
          <Text style={styles.text}>
            {convertToHourMinute(msg.timeLastMessage)}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {msg.lastMessage}
        </Text>
      </View>
    </Pressable>
  );
};

export default Thread;
