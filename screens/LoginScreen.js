import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login Screen.</Text>
            <Pressable style={styles.nextButton}>
                <Text onPress={() => navigation.navigate('Overview')}>Next</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    nextButton: {
        backgroundColor: "grey",
        width: 80,
        height: 30,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    }
})
