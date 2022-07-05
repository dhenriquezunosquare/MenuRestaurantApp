import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverview } from './screens/MealsOverview';
import { DetailsMealScreen } from './screens/DetailsMealScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>

      <NavigationContainer initialRouteName="MealsCategories">
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#351401' }, headerTintColor:'white' , contentStyle: { backgroundColor: '#3f2f25'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={
              { title: 'All Categories' }
            }
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} options={{ title: 'OverView' }} />
          <Stack.Screen name="MealsDetails" component={DetailsMealScreen}   />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({

});
