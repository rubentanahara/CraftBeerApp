import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../components/ui/Button/Button';
import styles from './styles';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image
          source={{
            uri: 'https://scontent-qro1-1.cdninstagram.com/v/t51.2885-19/354815806_961705881833152_563932784911436347_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=7Wk7_z7_PmwAX-3G80s&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBOkFZE6Wi02d9Tr3dyLZyRxcW6QISBJuy3O2uwZ6MaXg&oe=6562774C&_nc_sid=8b3546',
          }}
          style={styles.avatar}
        />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>5.00</Text>
          <Text style={styles.numberText}>Rating</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text style={styles.numberText}>Seguidores</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text style={styles.numberText}>Siguiendo</Text>
        </View>
      </View>
      <Text style={styles.username}>Maldito Consuelo</Text>
      <Text style={styles.ubi}>Guadalajara, Jalisco</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 15,
        }}
      >
        <Button
          text='Ver Catalogo'
          onPress={(): void => console.warn('edit profile')}
        />
        <Button
          text='Seguir'
          onPress={(): void => console.warn('edit profile')}
        />
        <Button
          text='Message'
          onPress={(): void => console.warn('edit profile')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
