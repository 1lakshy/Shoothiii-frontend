import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.main}>
            <Pressable style={{
                width: 50,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 50,
                marginTop: 30,
                justifyContent:"center"
            }}
            
            onPress={()=>navigation.goBack()}>
                <AntDesign name='left' style={styles.icon} />
            </Pressable>

            <View style={styles.content}>

                <View>
                    <Text style={styles.heading}>
                        What's your email address Or username
                    </Text>
                    <TextInput style={styles.input} placeholder='Email address' />
                </View>
                <View>
                    <Text style={styles.heading}>
                        Password
                    </Text>
                    <TextInput style={styles.input} placeholder='Password' />
                </View>
                <Pressable style={styles.btn}>
                    <Text style={{ color: "#000", fontSize: 16, fontWeight: "800" }}>
                        Next
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010100',
        paddingHorizontal: 28
    },
    content: {
        paddingVertical: 40,
        gap: 15
    },
    heading: {
        fontSize: 34,
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
    input: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: "#808588",
        paddingHorizontal: 20,
        fontSize: 20,
        color: "#fff"

    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: 'center',
    },
    icon: {
        fontSize: 32,
        fontWeight: "500",
        color: "#000",
    },
})