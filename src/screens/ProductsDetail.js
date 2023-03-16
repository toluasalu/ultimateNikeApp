import { FlatList, StyleSheet, View, useWindowDimensions, Image, Text, ScrollView, Pressable } from "react-native";
import products from "../data/products";



const ProductsDetailScreen = ({navigation}) => {
  const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    navigation.navigate("Cart");
  }


  return (
    <View>
      {/* Image Carousel */}
       <ScrollView>

       
       <FlatList 
            data={product.images}
            renderItem={({ item }) => (
            <Image 
                source={{uri: item}}
                style={{width, aspectRatio: 1}}
            
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
       />
       
             <View style={{padding: 20}}>
                 <Text style={styles.title}>{product.name}</Text>
                 <Text style={styles.price}>${product.price}</Text>
                 <Text style={styles.description}>{product.description}</Text>
                 

             </View>

    </ScrollView>   
      {/* Add to cart button */}
        <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10   
},
 price: {
    fontWeight: "500",
    fontSize: 16

 },
 description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300"
 },
 button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center"
 },
  buttonText: {
    color: "white",
   fontWeight: "500",
   fontSize: 16
  }



});

export default ProductsDetailScreen;