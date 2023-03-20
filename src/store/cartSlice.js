import { createSlice, createSelector  } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const addedItem = state.items.find((i) => i.id === newProduct.id)
            
            if(addedItem){
                addedItem.quantity += 1;
            } else {
                state.items.push({ product: newProduct, quantity: 1})
            }

            
        },

        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const selectedItem = state.items.find((p) => p.product.id === productId);

            if(selectedItem){
               selectedItem.quantity += amount;
            }

            if (selectedItem.quantity <= 0) {
                state.items = state.items.filter((i) => i !== selectedItem)
            }
        }
    }
})

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce (
       (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity
       ,0
)

const cartSelector = (state) => state.cart;

export const selectDelivery = createSelector(
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee
)

export const selectTotal = createSelector(
    selectSubtotal,
    selectDelivery,
    (subtotal, deliveryFee) =>  subtotal + deliveryFee
)