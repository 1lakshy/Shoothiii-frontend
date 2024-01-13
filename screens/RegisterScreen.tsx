import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const logo = require("../assets/images/logo.png")

const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ height: "100%" }}>
            {/* <ImageBackground source={require('../assets/images/DeepSpace.jpg')} style={{height:"100%",width:"100%",}}> */}
            <LinearGradient colors={["#434343", "#383838", "#2D2D2D", "#232323", "#191919", "#0E0E0E", "#030303", "#000000"]} style={{ flex: 1 }}>


                <View style={styles.halfArea}>
                    <Image source={logo} style={styles.logo} />
                    <View style={{}}>
                        <Text style={styles.heading}>
                            Hundreds of songs
                        </Text >
                        <Text style={styles.heading}>Free on Shoothiii</Text>
                    </View>
                </View>
                <View style={styles.signHalf}>
                    <Pressable style={styles.signIn} onPress={()=> navigation.navigate("Email")}>
                        <Text style={[styles.signText, { color: '#000' }]}>Sign Up Using Email</Text>
                    </Pressable>

                    <Pressable style={styles.commonSignIn}>
                        <Image source={require('../assets/images/google_Logo.png')} style={styles.signLogo} />
                        <View style={styles.commonView}>
                            <Text style={styles.signText}>Continue with Google</Text>
                        </View>

                    </Pressable>
                    <Pressable style={styles.commonSignIn}>
                        <Image source={require('../assets/images/facebook_Logo.webp')} style={styles.signLogo} />
                        <View>
                            <Text style={styles.signText} >Continue with Facebook</Text>
                        </View>

                    </Pressable>

                    <Pressable style={styles.commonSignIn}>
                        <Image source={require('../assets/images/github_Logo.png')} style={styles.signLogo} />
                        <View>
                            <Text style={styles.signText}>Continue with Github</Text>
                        </View>

                    </Pressable>
                    <TouchableOpacity>
                    <Pressable onPress={()=>navigation.navigate('Login')}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Nunito-Black', fontSize: 18 }}>
                            LogIn
                        </Text>
                    </Pressable>
                    </TouchableOpacity>
            
                </View>
            </LinearGradient>
            {/* </ImageBackground> */}

        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({

    halfArea: {
        height: "55%",
        width: "100%",
        // backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40,

    },

    logo: {
        width: 200,
        height: 200,

    },
    heading: {
        fontSize: 38,
        // fontWeight:"bold",
        fontFamily: 'Nunito-Bold',
        color: "#f2f2f2",
        textAlign: "center",
        lineHeight: 40,
        letterSpacing: -2

    },
    signHalf: {
        marginHorizontal: 30,
        gap: 15,
        flex: 1,
        // backgroundColor:'pink'

    },
    signIn: {
        width: '100%',
        height: 55,
        borderRadius: 25,
        backgroundColor: '#Ffa500',
        // backgroundColor: '#808588',
        alignItems: 'center',
        justifyContent: 'center'

    },
    commonSignIn: {
        width: '100%',
        height: 55,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
    },
    commonView: {
        flex: 1,
        justifyContent: 'center'
    },
    signText: {
        color: '#fdfdfd',
        fontSize: 15,
        fontFamily: 'Nunito-Bold'
    },

    signLogo: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 15
    }

})