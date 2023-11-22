// Import necessary components from React Native
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants';

type Message = {
  id: string;
  text: string;
  sender: 'me' | 'them';
  time: string;
  isRead: boolean;
};

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const spanishResponses = [
    '¡Claro!',
    'Entendido 😊',
    '¡Perfecto!',
    '¡Eso suena genial!',
    '¡Gracias!',
    '¡De acuerdo!',
    'Interesante...',
    '¡Qué buena idea!',
    '¡Exactamente!',
    '¡Eso creo yo también!',
  ];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const myMessage: Message = {
        id: `mine-${Date.now()}`,
        text: inputText,
        sender: 'me',
        time: getCurrentTime(),
        isRead: true,
      };
      setMessages([...messages, myMessage]);
      setInputText('');

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * spanishResponses.length);
        const theirMessage: Message = {
          id: `theirs-${Date.now()}`,
          text: spanishResponses[randomIndex],
          sender: 'them',
          time: getCurrentTime(),
          isRead: false,
        };
        setMessages((currentMessages) => [...currentMessages, theirMessage]);

        flatListRef.current?.scrollToEnd({ animated: true });
      }, 1100);
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <Animated.View
      entering={FadeIn}
      layout={Layout.springify()}
      style={item.sender === 'me' ? styles.myMessage : styles.theirMessage}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.messageFooter}>
        <Text style={styles.messageTime}>{item.time}</Text>
        {item.sender === 'me' && (
          <Ionicons
            name={item.isRead ? 'checkmark-done' : 'checkmark'}
            size={16}
            color={item.isRead ? COLORS.primary : COLORS.gray}
          />
        )}
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Messages</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder='Type a message'
          placeholderTextColor={COLORS.gray}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name='send' size={24} color={COLORS.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.medium,
    backgroundColor: COLORS.gray,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    fontSize: SIZES.large,
    fontFamily: 'bold',
    color: COLORS.white,
    marginLeft: SIZES.small,
  },
  backButton: {
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  messageList: {
    flex: 1,
    padding: SIZES.small,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: SIZES.small,
    marginBottom: SIZES.small,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: SIZES.small,
    marginBottom: SIZES.small,
  },
  messageText: {
    color: COLORS.black,
    fontFamily: 'regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.small,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    marginRight: SIZES.small,
    fontFamily: 'regular',
    color: COLORS.black,
  },
  sendButton: {
    backgroundColor: COLORS.gray,
    borderRadius: 50,
    padding: SIZES.medium,
  },
  sendButtonText: {
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color: COLORS.gray,
  },
});

export default Messages;
