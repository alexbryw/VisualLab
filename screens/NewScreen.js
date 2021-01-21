import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NewScreen = () => {
    console.log("New Screen.")
    return (
        <View style={{flex: 1, backgroundColor: "green" }}>
            <Text>TEST NewScreen.</Text>
        </View>
    )
}

export default NewScreen

const styles = StyleSheet.create({})
