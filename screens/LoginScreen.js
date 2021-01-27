import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.background} 
                start={{x: 0, y: 0}}
                end={{x: 1, y:0.35}}
                colors={['#000A68','#00C4EE']}
            >
            </LinearGradient>
                <Image style={styles.logo} source={require('../media/logo.png')}/>
                <Image source={require('../media/logoText.png')}/>
                <View style={styles.textHolder}>
                    <Text style={styles.text}>sjdfhskfhjsdfbjsd dkjfhsdkjf djsfbksjdf</Text>
                </View>
                <Pressable style={styles.nextButton}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Overview')}>Let's Go!</Text>
                </Pressable>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 112,
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        // flex: 1,
        bottom: 0,
        // width: "100%",
    },
    logo: {
        marginBottom: 30,
    },
    logoText: {

    },
    textHolder: {
        marginTop: 64,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 20,
    },
    text: {
        color: "white",
    },
    nextButton: {
        backgroundColor: "white",
        // width: 80,
        padding: 20,
        height: 32,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    buttonText: {
        fontSize: 18,
        letterSpacing: 1,
    },
    imgBackground: {
        flex: 1,
        resizeMode: "stretch",
        width: "100%",
    }
})
