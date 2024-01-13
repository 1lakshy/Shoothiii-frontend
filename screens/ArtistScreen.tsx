import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { artistsArray } from '../assets/data/artist';

const images = {
    1: require('../assets/images/artist/1.jpeg'),
    2: require('../assets/images/artist/2.jpeg'),
    3: require('../assets/images/artist/3.jpeg'),
    4: require('../assets/images/artist/4.jpeg'),
    5: require('../assets/images/artist/5.jpeg'),
    6: require('../assets/images/artist/6.jpeg'),
    7: require('../assets/images/artist/7.jpeg'),
    8: require('../assets/images/artist/8.jpeg'),
    9: require('../assets/images/artist/9.jpeg'),
    10: require('../assets/images/artist/10.jpeg'),
    11: require('../assets/images/artist/11.jpeg'),
    12: require('../assets/images/artist/12.jpeg'),
    13: require('../assets/images/artist/13.jpeg'),
    14: require('../assets/images/artist/14.jpeg'),
    15: require('../assets/images/artist/15.jpeg'),
    16: require('../assets/images/artist/16.jpeg'),
    17: require('../assets/images/artist/17.jpeg'),
    18: require('../assets/images/artist/18.jpeg'),
    19: require('../assets/images/artist/19.jpeg'),
    20: require('../assets/images/artist/20.jpeg'),
    21: require('../assets/images/artist/21.jpeg'),
    22: require('../assets/images/artist/22.jpeg'),
    23: require('../assets/images/artist/23.jpeg'),
    24: require('../assets/images/artist/24.jpeg'),
    25: require('../assets/images/artist/25.jpeg'),
    26: require('../assets/images/artist/26.jpeg'),
    27: require('../assets/images/artist/27.jpeg'),
    28: require('../assets/images/artist/28.jpeg'),
    29: require('../assets/images/artist/29.jpeg'),
    30: require('../assets/images/artist/30.jpeg'),
    31: require('../assets/images/artist/31.jpeg'),
    32: require('../assets/images/artist/32.jpeg'),
    33: require('../assets/images/artist/33.jpeg'),
    34: require('../assets/images/artist/34.jpeg'),
    35: require('../assets/images/artist/35.jpeg'),
    36: require('../assets/images/artist/36.jpeg'),
    37: require('../assets/images/artist/37.jpeg'),
    38: require('../assets/images/artist/38.jpeg'),
    39: require('../assets/images/artist/39.jpeg'),
};

import AntDesign from 'react-native-vector-icons/AntDesign';

const ArtistScreen = ({navigation}) => {


    return (
        <ScrollView style={styles.main}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.heading}>
                        Which Artist do you like?
                    </Text>
                </View>
                <View style={styles.input}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TextInput style={[styles.input, { width: "80%",paddingHorizontal:20 }]} placeholder='Your Favorite Artist' />
                        <Pressable style={{
                            width: 50,
                            height: 40,
                            backgroundColor: "#fff",
                            borderRadius: 50,
                            alignItems:"center",
                            justifyContent: "center"
                        }}

                            onPress={() => navigation.navigate("Bottom")}>
                            <AntDesign name='right' style={styles.icon} />
                        </Pressable>
                    </View>

                    <Text style={styles.tiny}>
                        Search your favorite Artist
                    </Text>
                </View>
                <View style={{ gap: 20, flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                    {artistsArray.map((item) => (
                        <View key={item.id} style={[styles.langCard]}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Image source={images[item.id]} style={styles.img} />
                        </View>
                    ))

                    }
                </View>

            </View>
        </ScrollView>
    )
}

export default ArtistScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010100',
        paddingHorizontal: 20
    },
    content: {
        paddingVertical: 50,
        gap: 12
    },
    heading: {
        fontSize: 38,
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

        fontSize: 20,
        color: '#fff'

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
        flexBasis: '44%',
        height: 140,
        // borderRadius: 15,
        flexDirection: 'row',
        overflow: 'hidden'

    },
    text: {
        fontFamily: 'Nunito-Black',
        color: '#fff',
        fontSize: 18,
        margin: 12,
        justifyContent: 'center'
    },
    img: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: 0,
        borderRadius: 50


    },
    icon: {
        fontSize: 32,
        fontWeight: "500",
        color: "#000",
    },
})