import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView} from 'react-native'
import CategoryCard from '../components/CategoryCard'
const water1 = require('../media/water1.jpg')

const OverviewScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <CategoryCard navigation={navigation} navTo={"Wave"} imgFile={water1}/>
            <CategoryCard navigation={navigation} />

            {/* <View style={styles.placeholderBox}>
                <Text>Waves. Image coming soon.</Text>
            </View>
            <Text>Learn about the Unit Circle.</Text>
            <Pressable style={styles.nextButton}>
                <Text onPress={() => navigation.navigate('Wave')}>Wave</Text>
            </Pressable>

            <View style={styles.placeholderBox}>
                <Text>Rockets. Image coming soon.</Text>
            </View> */}
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
