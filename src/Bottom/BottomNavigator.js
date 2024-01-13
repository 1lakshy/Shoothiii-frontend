import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import LibraryScreen from '../../screens/LibraryScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import PlayerScreen from '../../screens/PlayerScreen';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor:"#000" ,borderColor: '#000', height: 70 },
        headerShown: false,
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => <AntDesign name="home" size={22} color={focused ? '#fff' : '#808058'} />,
        }}
      />
      <Bottom.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => <AntDesign name="search1" size={22} color={focused ? '#fff' : '#808058'} />,
        }}
      />
      <Bottom.Screen
        name="Library"
        component={PlayerScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => <AntDesign name="book" size={22} color={focused ? '#fff' : '#808058'}/>,
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size,focused }) => <AntDesign name="user" size={22} color={focused ? '#fff' : '#808058'} />,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
