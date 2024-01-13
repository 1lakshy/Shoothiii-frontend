import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main';
import SearchScreen from '../../screens/SearchScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
<Drawer.Navigator>
    <Drawer.Screen name='Main' component={Main} options={{headerShown:false}}/>
    <Drawer.Screen name='Search' component={SearchScreen} options={{headerShown:false}}/>
</Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})