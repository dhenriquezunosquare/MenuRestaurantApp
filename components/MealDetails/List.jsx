import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const List = ({ data }) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.text}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor:'#e2b497'
    },
    text:{
        color:'#351401',
        textAlign:'center',
    }
})