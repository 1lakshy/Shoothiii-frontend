import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/userSlice';

const PasswordScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [password,setPassword] = useState();


    const handlePassword=(text)=>{
    setPassword(text)
    
    }

    const handlePasswordSubmit = ()=>{
        dispatch(setUserData(password));
        console.log(password)
        navigation.navigate("Language")

    }
    return (
        <View style={styles.main}>
            <Pressable style={{
                width: 50,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 50,
                marginTop: 30,
                justifyContent: "center"
            }}

                onPress={() => navigation.goBack()}>
                <AntDesign name='left' style={styles.icon} />
            </Pressable>
            <View style={styles.content}>
                <View>
                    <Text style={styles.heading}>
                        Create a Password
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text)=>handlePassword(text)}
                     />
                    <Text style={styles.tiny}>
                        Use at list 8 characters for Password
                    </Text>
                </View>
                <Pressable style={styles.btn} onPress={handlePasswordSubmit}>
                    <Text style={{ color: "#000", fontWeight: "900" }}>
                        Next
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010100',
        paddingHorizontal: 25
    },
    content: {
        paddingVertical: 40,
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
    input: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: "#808588",
        paddingHorizontal: 20,
        fontSize: 20

    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: 'center'
    },
    icon: {
        fontSize: 32,
        fontWeight: "500",
        color: "#000",
    },
})