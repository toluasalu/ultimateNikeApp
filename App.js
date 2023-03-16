import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductsDetailScreen from "./src/screens/ProductsDetail";
import ShoppingCart from './src/screens/ShoppingCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Products" component={ProductsScreen}/>
         <Stack.Screen name="Details" component={ProductsDetailScreen} options={{presentation: 'modal'}}/>
         <Stack.Screen name="Cart" component={ShoppingCart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
