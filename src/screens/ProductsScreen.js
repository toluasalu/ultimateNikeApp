import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({navigation}) => {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)

    return(

  <FlatList data={products}
        renderItem={({item}) => (
           <Pressable onPress={() => {
              //update selected product
              dispatch(productsSlice.actions.setSelectedProduct(item.id))              

              navigation.navigate("Details")
           }} 
           style={styles.itemContainer}>
               <Image source={{uri: item.image}} 
              style={styles.image}/>
           </Pressable>
        )}
        numColumns={2}
      />
      
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     itemContainer: {
       width: "50%",
       padding: 1,
     },
     image: {
        width: "100%", 
        aspectRatio: 1
    }
  });


  export default ProductsScreen;
