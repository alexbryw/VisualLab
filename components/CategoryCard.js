import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const CategoryCard = ({ navigation, navTo, imgFile, textTitle, cardText }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navTo ? () => navigation.navigate(navTo) : null}>
            {   
                imgFile ? <Image style={styles.img} source={imgFile} />
                :
                <Image style={styles.img} source={require("../media/coming-soon.jpg")} />
            }
            <View style={styles.textHolder}>
                { cardText ?
                <Text style={styles.textBody}>
                    {textTitle &&<Text style={styles.titleText}>{textTitle}: </Text>}{cardText}
                </Text>
                :
                <Text>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
                </Text>
                }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        marginTop: 38,
        alignItems: 'center',
    },
    img:{
        width: 300,
        height: 230,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    titleText: {
        fontSize: 24,
        // color: '#00C4EE',
        color: '#000A68',
    },
    textBody: {
        color: '#00C4EE',
        letterSpacing: 1.1,
    },
    textHolder: {
        width: 300,
        paddingHorizontal: 8,
        backgroundColor: "#f8f8f8",
        paddingTop: 8,
        paddingBottom: 12,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
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
})
