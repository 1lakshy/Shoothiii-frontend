import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import { useQuery, gql, useLazyQuery } from '@apollo/client';
// import { SafeAreaView } from 'react-native-safe-area-context'
import { GET_QUERY_SONGS } from "../graphql/queries"
import Modal from "react-native-modal";
import { useDispatch } from 'react-redux';
import { getCurrentSong, getSearchData,clearData } from '../store/searchSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SlideInUp } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PlayerScreen from './PlayerScreen';
import Constants from '../src/AudioSetup/constants';
import { UseCurrentSong } from '../src/AudioSetup/MusicPlayerServices';


// const QUERY_ALL_USERS = gql`
// query GetSongs{
// songs {
//   Song
//   Image
//   Movie
//   PerformedBy
// }
// }
// `

const filter = ["Top", "Songs", "Playlists", "Artists", "Albums"]
const { width,height } = Dimensions.get('window');
const SearchScreen = () => {



    const dispatch = useDispatch()
    const [searchSong, setSearchSong] = useState('');
    const [getSongs, { loading, error, data }] = useLazyQuery(GET_QUERY_SONGS, {
        onCompleted: (queryData) => {
            setSongData(queryData.song)
            console.log("error on complete",songData)
            dispatch(clearData());
            dispatch(getSearchData(queryData.song))
        }
    });
    // const {data,loading,error} = useQuery(QUERY_ALL_USERS)
    const [songData, setSongData] = useState([]);

    console.log("data not recived from server",data)
    console.log("no error in server",error)

    // if (loading) {
    //     return <Text>
    //         Loading
    //     </Text>
    // }
    const handelSearch = async (text) => {
        setSearchSong(text);
        console.log(text)
        getSongs({ variables: { name: searchSong } })
    }


    // // ref
    // const bottomSheetRef = useRef<BottomSheet>(null);

    // // variables
    // const snapPoints = useMemo(() => ['25%', '50%'], []);

    // // callbacks
    // const handleSheetChanges = useCallback((index: number) => {
    //     console.log('handleSheetChanges', index);
    // }, []);

    // song modal popup
    const [modalVisible, setModalVisible] = useState(false);
    const [currentSong,setCurrentSong] = useState(null);

    const [songModalVisible,setSongModalVisible] = useState(false);

    const modalHandler = (item) => {
        setModalVisible(true);
        setCurrentSong(item);
        dispatch(getCurrentSong(item));
    }

    const songModalHandler =()=>{
        
    }
    return (<>
        <SafeAreaView style={styles.main}>
            <Constants />
            <View style={styles.topNav}>

                <View style={{ gap: 10, flexDirection: "row", alignItems: "flex-end" }}>
                    {/* <Image style={{width:100,height:100,borderRadius:50}}  /> */}
                    <View style={{ width: 50, height: 50, backgroundColor: '#fff', borderRadius: 50 }}></View>
                    <Text style={styles.heading}>Search</Text>
                </View>
                <View>
                    <TextInput onChangeText={handelSearch} value={searchSong} style={styles.input} placeholder='What do you want to listen to?' />
                </View>
            </View>

            <ScrollView>
                <View>
                    <Text style={styles.subHeading}>
                        Browse all
                    </Text>
                </View>
                <ScrollView style={styles.filter} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        filter.map((item, index) => (
                            <View key={index} style={styles.filterElement}>
                                <Text style={{ color: "#fff" }}>{item}</Text>
                            </View>

                        ))
                    }
                </ScrollView >
                <View style={{ flex: 1, marginTop: 15 }}>
                    {data && data.song ? (
                        songData.map((item, index) => (
                            <Pressable onPress={() => modalHandler(item)} key={index} style={styles.songDiv} >
                                <Image style={{ width: 50, height: 50 }} source={{ uri: `${item.artwork}` }} />
                                <View>

                                    <Text style={styles.songName}>{item.title}</Text>

                                    <Text style={styles.tiny}>{item.artist}</Text>
                                </View>

                                <Entypo name="dots-three-vertical" style={{ position: 'absolute', right: 5, top: 5, fontSize: 14 }} />
                            </Pressable>
                        ))
                    ) : (
                        <Text>No data available</Text>
                    )}
                </View>
            </ScrollView>

            <View>

            </View>


        </SafeAreaView>
        <Modal isVisible={modalVisible}
            animationIn="slideInUp"
            coverScreen={false}
            hasBackdrop={false}
            avoidKeyboard={false}
            style={{ 
                backgroundColor: "#fff",
                 height: 60,
                  width: width,
                   bottom: 0,
                   margin:0,
                    position: "absolute",
                    borderRadius:10 ,
                }}>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",width:"100%",height:"100%",alignItems:"center"}}
            onPress={()=>setSongModalVisible(true)}>
                <View style={{width:80,alignItems:"center"}}>
                    <Image  source={{ uri: currentSong?.artwork.toString() }} style={{
                        width:50,
                        height:50,
                        borderRadius:10
                        }}/>
                </View>
                <View style={{flex:1}}>
                  <Text>
                    {currentSong?.title}
                  </Text>
                  <Text>
                    {currentSong?.artist}
                  </Text>
                </View>
                <View style={{width:60}}>
                <AntDesign name='pluscircleo' style={{fontSize:18}} />
                </View>

            </TouchableOpacity>
        </Modal>
        <Modal isVisible={songModalVisible}
            animationIn="slideInUp"
            coverScreen={false}
            hasBackdrop={false}
            avoidKeyboard={false}
            onBackButtonPress={()=>setSongModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={()=>setSongModalVisible(false)}
            style={{ 
                 height: height,
                  width: width,
                   bottom: 0,
                   margin:0,
                    position: "absolute",
                    borderRadius:10 
                }}>
           <PlayerScreen trac={currentSong}/>
        </Modal>
    </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010100',
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 38,
        fontFamily: 'Nunito-Bold',
        color: "#f2f2f2",
        lineHeight: 40,
        letterSpacing: -2

    },
    subHeading: {
        fontSize: 24,
        fontFamily: 'Nunito-Bold',
        color: "#f2f2f2",
        lineHeight: 40,
        letterSpacing: -2

    },
    input: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: "#808588",
        paddingHorizontal: 15,
        fontSize: 20,
        color: "#ffffff"

    },
    topNav: {
        paddingVertical: 10,
        gap: 15
    },
    filter: {

        // width:"100%",
        height: 50,
        // backgroundColor:"#fff",

    },
    filterElement: {
        // width: 60,
        height: 40,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#f2f2f2',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
        alignSelf: 'center'

    },
    songDiv: {
        width: '100%',
        height: 60,
        // backgroundColor: 'pink' ,
        flexDirection: 'row',
        gap: 15
    },
    tiny: {
        fontSize: 12,
        color: '#808588',
        paddingVertical: 5
    },
    songName: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito-Bold"
    }
})