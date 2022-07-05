import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { FavoriteScreen } from './screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MealsOverview } from './screens/MealsOverview';
import { DetailsMealScreen } from './screens/DetailsMealScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={
      {
        headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' }, drawerInactiveTintColor: 'white', drawerActiveTintColor: '#351401', drawerActiveBackgroundColor: '#e4baa1'
      }
    }>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
      }} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>

      <NavigationContainer initialRouteName="MealsCategories">
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>

          <Stack.Screen name="Drawer" component={DrawerNavigator}
            options={
              { title: 'All Categories', headerShown: false }
            }
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} options={{ title: 'OverView' }} />
          <Stack.Screen name="MealsDetails" component={DetailsMealScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({

});
