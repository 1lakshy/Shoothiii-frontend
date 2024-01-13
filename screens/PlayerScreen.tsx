import React, {useState,useEffect} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View,SafeAreaView,ActivityIndicator,StatusBar } from 'react-native';
import { addTrack, setupPlayer } from '../src/AudioSetup/MusicPlayerServices';
import LinearGradient from 'react-native-linear-gradient'
import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import { playListData } from '../src/AudioSetup/constants';
import SongInfo from '../src/components/SongInfo';
import SongSlider from '../src/components/SongSlider';
import ControlCenter from '../src/components/ControlCenter';


const {width} = Dimensions.get('window')


const PlayerScreen = () => {
    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;
        
        }
    })

    const [isPlayerReady, setIsPlayerReady] = useState(false);
    async function setup() {
      let isSetup = await setupPlayer();
      if (isSetup) {
        await addTrack()
      }
  
      setIsPlayerReady(isSetup)
    }
  
    useEffect(() => {
      setup()
    }, [])
  
    //  console.log("hi ji kar lo ",track)
    if (!isPlayerReady) {
      return (
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>
      )
    }
  


    const renderArtWork = () => {
        return(

            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }
    return (

        <LinearGradient colors={['#a34c0d', '#592804', '#241001', '#000000']} style={{ flex: 1, paddingTop: 20 }}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={styles.container}>
            <FlatList
            horizontal
            data={playListData}
            renderItem={renderArtWork}
            // keyExtractor={song => song.index.toString()}
            />
    
            <SongInfo track={track}/>
            <SongSlider />
            <ControlCenter />
        </View>
        </LinearGradient>
      )
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: '#001d23',
      paddingBottom:50
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });

export default PlayerScreen