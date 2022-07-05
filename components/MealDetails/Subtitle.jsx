import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Subtitle = ({title}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',


    },
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
    }
})
