import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { MealsDetails } from "./MealsDetails";

export const MealItem = ({ item }) => {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('MealsDetails', {
            mealId: item.id,
            mealTitle: item.title,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.buttonPressed : null}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: item.imageUrl }} resizeMode="cover" style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>

                    </View>
                    <MealsDetails item={item} />
                </View>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,

        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.50
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 8
    },
    
})