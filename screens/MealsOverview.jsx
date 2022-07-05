import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { useRoute } from '@react-navigation/native';
import { MealItem } from '../components/MealItem';





export const MealsOverview = ({ route, navigation }) => {
    //   const { categoryId, categoryTitle,categoryColor } = route.params;
    //   console.log(categoryId, categoryTitle, categoryColor);

    const routes = useRoute();
    const { categoryId, categoryTitle, categoryColor } = routes.params;

    const mealsList = MEALS.filter(m => m.categoryIds.includes(categoryId));

    useEffect(() => {// OR USE USELAYAOTFFECT
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [])

   


    return (
        <View style={styles.container}>
            <FlatList data={mealsList} renderItem={
                (itemData) => (<MealItem key={itemData.index} item={itemData.item}   />)
            } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});