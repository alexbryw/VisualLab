import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView} from 'react-native'
import CategoryCard from '../components/CategoryCard'
const sin = require('../media/sin.png')

const WaveScreen = ({ navigation }) => {
    const OverviewText = [
        {
            title: "Unit Circle",
            text: "Learn about degrees, sine, cosine with a 3D unit circle."
         }
    ]
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <CategoryCard
                navigation={navigation}
                navTo={"Sine"} imgFile={sin}
                textTitle={OverviewText[0].title}
                cardText={OverviewText[0].text}
            />
            {/* <CategoryCard navigation={navigation} />
            <CategoryCard navigation={navigation} /> */}
        </ScrollView>
        </SafeAreaView>
    )
}

export default WaveScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "flex-start",
        // backgroundColor: "white"
    },
    scrollView: {
        paddingTop: 48,
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
