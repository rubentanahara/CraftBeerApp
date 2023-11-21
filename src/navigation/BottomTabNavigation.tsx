import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SIZES } from '../constants';
import ExploreScreen from '../screens/Explore';
import InboxScreen from '../screens/Inbox';
import ProfileScreen from '../screens/Profile';
import WishlistScreen from '../screens/Wishlists';
import { Text } from 'react-native';
// Initialize the bottom tabs navigator
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
    // elevation: 0,
    height: 100,
    backgroundColor: '#121212',
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'ios-search' : 'ios-search-outline'}
                size={24}
                color={focused ? COLORS.white : COLORS.gray2}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.white : COLORS.gray2,
                fontSize: SIZES.small,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: -SIZES.medium,
              }}
            >
              Explore
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name='Wishlist'
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'ios-heart' : 'ios-heart-outline'}
                size={24}
                color={focused ? COLORS.white : COLORS.gray2}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.white : COLORS.gray2,
                fontSize: SIZES.small,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: -SIZES.medium,
              }}
            >
              Wishlist
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name='Inbox'
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'ios-mail' : 'ios-mail-outline'}
                size={24}
                color={focused ? COLORS.white : COLORS.gray2}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.white : COLORS.gray2,
                fontSize: SIZES.small,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: -SIZES.medium,
              }}
            >
              Inbox
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'ios-person' : 'ios-person-outline'}
              size={24}
              color={focused ? COLORS.white : COLORS.gray2}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.white : COLORS.gray2,
                fontSize: SIZES.small,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: -SIZES.medium,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
