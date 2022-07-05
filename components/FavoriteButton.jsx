import React from 'react'
import { Button, Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export const FavoriteButton = ({ onPress,icon='star',color='white' }) => {
    return (
        <Pressable android_ripple={true} onPress={onPress} style={({pressed})=> pressed? styles.buttonPressed:null }>
            <Ionicons name={icon} size={24} style={styles.icon} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon:{
    },
    buttonPressed:{
        opacity:0.25
    }

});
