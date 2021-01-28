import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView} from 'react-native'
import CategoryCard from '../components/CategoryCard'
const water1 = require('../media/water1.jpg')
const rocket = require('../media/space.jpg')

const OverviewScreen = ({ navigation }) => {
    const OverviewText = [
        {
            title: "Waves",
            text: "All about waves! Learn about circles, degrees, sine, cosine and interference patterns."
         }
    ]
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.headerTextHolder}>
                <Text style={styles.headerTextTitle}>CATEGORIES</Text>
            </View>
            <CategoryCard
                navigation={navigation}
                navTo={"Wave"}
                imgFile={water1}
                textTitle={OverviewText[0].title}
                cardText={OverviewText[0].text}
            />
            <CategoryCard navigation={navigation} textTitle="Propulsion" cardText="Coming soon..." imgFile={rocket}/>
            <CategoryCard navigation={navigation} />
        </ScrollView>
        </SafeAreaView>
    )
}

export default OverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    headerTextHolder: {

    },
    headerTextTitle: {
        fontSize: 24,
        color: '#00C4EE',
        letterSpacing: 1.6,
        fontWeight: "bold",
    },
})
