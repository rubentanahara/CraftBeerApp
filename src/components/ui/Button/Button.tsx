import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const Button: React.FC<IButton> = ({ text = '', onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
