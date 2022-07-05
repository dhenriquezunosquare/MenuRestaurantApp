import { useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { FavoriteButton } from '../components/FavoriteButton';
import { List } from '../components/MealDetails/List';
import { Subtitle } from '../components/MealDetails/Subtitle';
import { MealsDetails } from '../components/MealsDetails';
import { MEALS } from '../data/dummy-data';


export const DetailsMealScreen = ({ route, navigation }) => {
    const routes = useRoute();
    const { mealId, mealTitle } = routes.params;

    const handleFavoriteBtn= () => {
        console.log("Presing Favs");
    };

    useLayoutEffect(() => {// OR USE USELAYAOTFFECT
        navigation.setOptions({
            id: mealId,
            title: mealTitle,
            headerRight:()=>{
                return <FavoriteButton onPress={handleFavoriteBtn}  />
            }
        })
    }, [])

    const selectedMeals = MEALS.find(m => m.id === mealId);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Image source={{ uri: selectedMeals.imageUrl }} resizeMode="cover" style={styles.image} />
                <Text style={styles.title}>{selectedMeals.title}</Text>

                <MealsDetails item={selectedMeals} stylesContainer={styles.title} textStyles={styles.mealsDetails} />
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <Subtitle title={'Ingredients'} />
                        {selectedMeals.ingredients.map(item => (
                            <List key={item} data={item} />
                        ))}

                        <Subtitle title={'Steps'} />
                        {selectedMeals.steps.map(item => (
                            <List key={item} data={item} />
                        ))}
                    </View>
                </View>




            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        marginBottom:32
    },
    outerContainer: {
        alignItems: 'center',
    },
    innerContainer: {
        width: '80%',

    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        margin: 8,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    mealsDetails: {
        color: 'white',
    },


});