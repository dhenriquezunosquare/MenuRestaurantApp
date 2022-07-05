import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CategoryItem = ({ item,navigation }) => {
    const handlePress=() => {
        navigation.navigate('MealsOverview',{
            categoryId:item.id,
            categoryTitle:item.title,
            categoryColor:item.color
        });
    };
    return (
        <CategoryGridTile title={item.title} color={item.color} onPress={handlePress} />
    )
}

export const CategoriesScreen = ({navigation}) => {
    return (
        <FlatList data={CATEGORIES} renderItem={
            (itemData) => <CategoryItem navigation={navigation} key={itemData.index} item={itemData.item} />
        } numColumns={2} />
    )
}

const styles = StyleSheet.create({

});