import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const WaveScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.placeholderBox}>
                <Text>Unit Circle - degrees. Image coming soon.</Text>
            </View>
            <Text>Learn about the Unit Circle.</Text>
            <Pressable style={styles.nextButton}>
                <Text onPress={() => navigation.navigate('Sine')}>Start</Text>
            </Pressable>

            <View style={styles.placeholderBox}>
                <Text>Wave Interference. Image coming soon.</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default WaveScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "flex-start",
        // backgroundColor: "white"
    },
    scrollView: {
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    nextButton: {
        backgroundColor: "grey",
        width: 80,
        height: 30,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    placeholderBox: {
        marginTop: 112,
        width: 320,
        height: 280,
        backgroundColor: "grey",
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
})
