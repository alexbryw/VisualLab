import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const ContentOverviewScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Content Overview Screen</Text>
            <Pressable style={styles.nextButton}>
                <Text onPress={() => navigation.navigate('Sine')}>Start</Text>
            </Pressable>
        </View>
    )
}

export default ContentOverviewScreen

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
