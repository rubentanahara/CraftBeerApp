import React from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./src/assets/fonts/Poppins-Regular.ttf'),
    light: require('./src/assets/fonts/Poppins-Light.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
    medium: require('./src/assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='BottomTabNavigation'
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
