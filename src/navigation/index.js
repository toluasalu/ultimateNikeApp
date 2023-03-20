import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProductsScreen from '../screens/ProductsScreen';
import ProductsDetailScreen from "../screens/ProductsDetail";
import ShoppingCart from '../screens/ShoppingCart';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/cartSlice";


const Navigation = () => {
    const Stack = createNativeStackNavigator();
    
    const numberOfItems = useSelector(selectNumberOfItems);

    return (
        <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{contentStyle: { backgroundColor: 'white'}}}
      >
         <Stack.Screen name="Products" 
         component={ProductsScreen}
         options={({navigation}) => (
          {headerRight: () => (
            <Pressable 
             onPress={() => navigation.navigate("Cart")}
            style={{flexDirection: "row"}}>
               <FontAwesome5 name="shopping-cart" size={18} color="gray" />
               <Text style={{marginLeft: 5, fontWeight: 500}}>{numberOfItems}</Text>
            </Pressable>
           )}
         )}
         />
         <Stack.Screen name="Details" 
         component={ProductsDetailScreen} 
         options={{presentation: 'modal'}}/>
         <Stack.Screen name="Cart" component={ShoppingCart}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  });

export default Navigation;

