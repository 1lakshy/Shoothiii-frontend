import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator,CardStyleInterpolators } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import LibraryScreen from '../screens/LibraryScreen'
import BottomNavigator from './Bottom/BottomNavigator'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import LanguageScreen from '../screens/LanguageScreen'
import ArtistScreen from '../screens/ArtistScreen'
import EmailScreen from '../screens/EmailScreen'
import PasswordScreen from '../screens/PasswordScreen'
import PlayerScreen from '../screens/PlayerScreen'
const Stack = createNativeStackNavigator();



const AppNavigator = () => {
  return (
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      gestureEnabled:true
    }}>
      
        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Password' component={PasswordScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Email' component={EmailScreen} options={{headerShown:false}}/>

        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Language' component={LanguageScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Artist' component={ArtistScreen} options={{headerShown:false}}/>
        
        <Stack.Screen name='Bottom' component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={SearchScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name='Player' component={PlayerScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name='Library' component={LibraryScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})