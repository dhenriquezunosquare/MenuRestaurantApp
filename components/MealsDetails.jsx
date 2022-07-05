import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const MealsDetails = ({item,stylesContainer,textStyles}) => {
    return (
        <View style={[styles.details,stylesContainer]}>
            <Text style={[styles.detailsItem,textStyles]}>{item.duration}m</Text>
            <Text style={[styles.detailsItem,textStyles]}>{item.complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem,textStyles]}>{item.affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14
    }
})
