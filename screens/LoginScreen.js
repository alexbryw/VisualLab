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
                <Image source={require('../media/logo-text.png')}/>
                <View style={styles.textHolder}>
                    <Text style={styles.text}>Interactive learning</Text>
                    <Text style={styles.text}>in a 3D environment.</Text>
                </View>
                <Pressable style={styles.nextButton} onPress={() => navigation.navigate('Overview')}>
                    <Text style={styles.buttonText}>Let's Go!</Text>
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
        paddingTop: 132,
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
        marginTop: 180,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 20,
    },
    text: {
        color: "white",
        fontSize: 18,
        letterSpacing: 1.4,
        fontWeight: "700",
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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        letterSpacing: 1.2,
        fontWeight: "bold",
        color: '#00C4EE',
    },
    imgBackground: {
        flex: 1,
        resizeMode: "stretch",
        width: "100%",
    }
})
