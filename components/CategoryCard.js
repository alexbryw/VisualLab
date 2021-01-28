import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'

const CategoryCard = ({ navigation, navTo='Welcome', imgFile }) => {
    console.log(imgFile)

    // const getImg = () => {
    //     if (!imgFile) {
    //         return require("../media/coming-soon.jpg")
    //     } else {
    //         return require(imgFile)
    //     }
    // }
    return (
        <View style={styles.container}>
            {/* <View style={styles.placeholderBox}>
                <Text>Waves. Image coming soon.</Text>
            </View> */}
            <Text>Learn about the Unit Circle.</Text>
            {
                imgFile ? <Image style={styles.img} source={imgFile} />
                :
                <Image style={styles.img} source={require("../media/coming-soon.jpg")} />
            }
            <Pressable style={styles.nextButton}>
                <Text onPress={() => navigation.navigate(navTo)}>{navTo}</Text>
            </Pressable>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    img:{
        width: 300,
        height: 230,
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
})
