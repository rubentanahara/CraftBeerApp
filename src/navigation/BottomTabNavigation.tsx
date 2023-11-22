import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { COLORS, SIZES } from '../constants';
import ExploreScreen from '../screens/Explore';
import InboxScreen from '../screens/Inbox';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
