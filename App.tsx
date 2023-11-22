import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import Cart from './src/screens/Cart/Cart';
import CraftBeerProfile from './src/screens/CraftBeerProfile';
import ProductDetails from './src/screens/ProductDetails/ProductDetails';
import { StatusBar } from 'react-native';
import ListingMap from './src/screens/ListingMap';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
};
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
      console.log('fonts loaded');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name='BottomTabNavigation'
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen */}
          {/*   name='Cart' */}
          {/*   component={Cart} */}
          {/*   options={{ */}
          {/*     headerShown: false, */}
          {/*   }} */}
          {/* /> */}
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='CarftBeerProfile'
            component={CraftBeerProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MapView'
            component={ListingMap}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
