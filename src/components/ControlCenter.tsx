import React from 'react'
import { Pressable,View,StyleSheet,Dimensions, SafeAreaView } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width,height} = Dimensions.get('window');
const ControlCenter = () => {


  const playBackState = usePlaybackState();
//   next button
const skipToNext = async()=>{
    await TrackPlayer.skipToNext()
}

// previous button
const skipToPrevious = async()=>{
   await TrackPlayer.skipToPrevious();    
}


const togglePlayback = async (playback:State)=>{
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if(currentTrack !== null){
        if(playback === State.Paused || playback === State.Ready){
            await TrackPlayer.play();
        }else{
            await TrackPlayer.pause();
        }
    }
}
  return (
   <SafeAreaView>
        <View style={styles.wrapper}>
        <Pressable onPress={skipToPrevious}>
            <Ionicons name='play-skip-back' style={styles.icon}/>
        </Pressable>
        <Pressable onPress={()=>togglePlayback(playBackState)} style={styles.toggle}>
            <Ionicons name={playBackState === State.Playing? "pause-outline":"play-sharp"} color={'#000000'} style={[styles.icon,{color:"#000"}]}/>
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Ionicons name='play-skip-forward' style={styles.icon}/>
        </Pressable>
        </View>

    </SafeAreaView>
  )
}

export default ControlCenter

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
  
        
    }
})