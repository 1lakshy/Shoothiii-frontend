import Slider from '@react-native-community/slider';
import React from 'react'
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import { useProgress } from 'react-native-track-player';


const {width,height} = Dimensions.get('window');

const SongSlider = () => {

    const {position,duration} = useProgress();
  return (
<View style={{width:width-60,marginLeft:"auto",marginRight:"auto"}}>
    <Slider 
    value={position}
    minimumValue={0}
    maximumValue={duration}
    thumbTintColor='#fff'
    maximumTrackTintColor='#fff'
    style={{width:"100%"}}
    />

    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <Text style={styles.tiny}>
          {new Date(position*1000).toISOString().substring(15,19)}  
        </Text>
        <Text style={styles.tiny}>
          {new Date((duration-position)*1000).toISOString().substring(15,19)}  
        </Text>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
    icon: {
      fontSize: 32,
      fontWeight: "500",
      color: "#fff"
    },
    toggle:{
        width:70,
        height:70,
        borderRadius:40,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    wrapper:{
        width: 200,
        flexDirection:"row",
        gap:40,
        height:80,
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto"
  
        
    },
    tiny: {
        fontSize: 14,
        color: '#bababa',
        paddingVertical: 0
      },
})
export default SongSlider