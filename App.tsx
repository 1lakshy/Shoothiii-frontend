import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import BootSplash from "react-native-bootsplash"
import Animation from './screens/SplashScreen';
import RegisterScreen from './screens/RegisterScreen';
import EmailScreen from './screens/EmailScreen';
import LoginScreen from './screens/LoginScreen';
import PasswordScreen from './screens/PasswordScreen';
import LanguageScreen from './screens/LanguageScreen';
import ArtistScreen from './screens/ArtistScreen';
import SearchScreen from './screens/SearchScreen';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import AppNavigator from './src/AppNavigator';
import PlayerScreen from './screens/PlayerScreen1';

const client = new ApolloClient({
  uri: 'https://shoothiii.onrender.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const init = async () => {
      setTimeout(() => {
        setShowSplash(false)
      }, 2200);
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);


  return (
    <ApolloProvider client={client}>

{/* <View> */}
    {showSplash ?( <Animation/>) : (<AppNavigator/> )}
    {/* <Animation/> */}
    {/* </View> */}
  {/* <AppNavigator/>  */}

   {/* <PlayerScreen/> */}

 

    </ApolloProvider>

)
}

export default App

const styles = StyleSheet.create({})