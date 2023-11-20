import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/Cart/Cart';
import ExploreScreen from '../screens/Explore';
import InboxScreen from '../screens/Inbox/Inbox';
import ProfileScreen from '../screens/Profile/Profile';
import WishlistScreen from '../screens/Wishlists/Wishlists';
// Initialize the bottom tabs navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Explore') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'ios-mail' : 'ios-mail-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Explore' component={ExploreScreen} />
        <Tab.Screen name='Wishlist' component={WishlistScreen} />
        <Tab.Screen name='Cart' component={CartScreen} />
        <Tab.Screen name='Inbox' component={InboxScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
