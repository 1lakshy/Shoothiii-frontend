/* eslint-disable prettier/prettier */
import React from 'react';
import LottieView from 'lottie-react-native';
import { View,Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function Animation() {
  return (<>
  {/* <SafeAreaView> */}
  <View style={{height:"100%",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#000"}}>
  <LottieView style={{width:220,height:220}} source={require('../head.json')} autoPlay loop={true} />
  </View>
  {/* </SafeAreaView> */}
 
 

  </>

  );
}