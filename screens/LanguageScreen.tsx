import { Image, Pressable, StyleSheet, Text, TextInput, View,TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import { languageData } from '../assets/data/language'
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/userSlice';

const images = {
    1: require('../assets/images/lang/1.png'),
    2: require('../assets/images/lang/2.png'),
    3: require('../assets/images/lang/3.png'),
    4: require('../assets/images/lang/4.png'),
    5: require('../assets/images/lang/5.png'),
    6: require('../assets/images/lang/6.png'),
    7: require('../assets/images/lang/7.png'),
    8: require('../assets/images/lang/8.png'),
};

const LanguageScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const [language,setLanguage] = useState([]);
    
    const languageHandler = (item)=>{
        setLanguage((prevLanguages) => [...prevLanguages, item.language])
    }

    const handleLanguageSubmit=()=>{
        navigation.navigate("Artist")
        console.log(language)
        dispatch(setUserData(language));

    } 
    
    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.heading}>
                        What music do you like?
                    </Text>
                </View>
                <View style={{ gap: 14, flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                    {languageData.map((item) => (
                        
                        <TouchableOpacity key={item.id} style={[styles.langCard, { backgroundColor: `${item.color}`}]}
                        onPress={()=>languageHandler(item)}>
                            <Text style={styles.text}>{item.language}</Text>
                            {/* <Image source={{ uri: `${item.artist}` }} style={styles.img}/>*/}
                            <Image source={images[item.id]} style={styles.img} />

                        </TouchableOpacity>
                      
                    ))

                    }
                </View>

            </View>
            <Pressable style={styles.btn} onPress={handleLanguageSubmit}>
                <Text style={{ color: "#000", fontWeight: "900" }}>
                        Next
                    </Text>
                </Pressable>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010100',
        paddingHorizontal: 20
    },
    content: {
        paddingTop: 50,
        paddingBottom: 20,
        gap: 10
    },
    heading: {
        fontSize: 38,
        fontFamily: 'Nunito-Bold',
        color: "#f2f2f2",
        lineHeight: 40,
        letterSpacing: -2

    },
    tiny: {
        fontSize: 14,
        color: '#fff',
        paddingVertical: 5
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        width: 100,
        backgroundColor: "#808588",
        borderRadius: 20,
        alignItems: 'center'
    },
    langCard: {
        flexBasis: '48%',
        height: 80,
        borderRadius: 15,
        flexDirection:'row',
        overflow:'hidden'

    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: '#000',
        fontSize: 18,
        margin:5
    },
    img: {
        width: 90,
        height: 90,
        position:'absolute',
        bottom:-20,
        right:0
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: 'center'
    },
})