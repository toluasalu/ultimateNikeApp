import { FlatList, Text, StyleSheet, View, Pressable } from "react-native";
// import cart from "../data/cart";
import { useSelector } from "react-redux";
import { selectSubtotal, selectDelivery, selectTotal } from "../store/cartSlice";
import CartListItem from "../../components/CartListItem";


const ShoppingCartTotals = () => {
     const subtotal = useSelector(selectSubtotal);
     const deliveryFee = useSelector(selectDelivery);
     const total = useSelector(selectTotal);
     
       return(
            <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>{subtotal}$</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>{deliveryFee}$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>{total}$</Text>
                </View>

            </View>
        )
}

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart.items)
    
    return (
         <>
         <FlatList  
         data={cart}
         renderItem={({item}) => <CartListItem cartItem={item}/>}
         ListFooterComponent={() => <ShoppingCartTotals />}
         />
          
         <Pressable onPress={() => {}} style={styles.button}>
         <Text style={styles.buttonText}>Checkout</Text>
     </Pressable>
         
         </>
    )
}

const styles = StyleSheet.create({
   totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
   },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: "gray",
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

})


export default ShoppingCart;