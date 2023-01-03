import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   orderItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   totalPrice: 0,
   itemsCount: 0
}
const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const existingIndex = state.orderItems.findIndex(item => item.productId === action.payload.productId)
         if (existingIndex >= 0) {
            state.orderItems[existingIndex] = {
               ...state.orderItems[existingIndex],
               quantity: ++state.orderItems[existingIndex].quantity,
               itemTotal: action.payload.price * state.orderItems[existingIndex].quantity
            }
         } else {
            let tempProductionItem = { ...action.payload, quantity: 1, itemTotal: action.payload.price };
            state.orderItems.push(tempProductionItem)
         }
         localStorage.setItem("cart", JSON.stringify(state.orderItems))
      },
      decreaseCart: (state, action) => {
         const itemIndex = state.orderItems.findIndex((item) => item.productId === action.payload.productId);
         if (state.orderItems[itemIndex].quantity > 1) {
            state.orderItems[itemIndex].quantity -= 1;
            state.orderItems[itemIndex].itemTotal -= action.payload.price
         } else if (state.orderItems[itemIndex].quantity === 1) {
            const nextOrderItems = state.orderItems.filter(item => item.productId !== action.payload.productId)
            state.orderItems = nextOrderItems
         }
         localStorage.setItem("cart", JSON.stringify(state.orderItems))
      },
      removeFromCart: (state, action) => {
         state.orderItems.map((item) => {
            if (item.productId === action.payload.productId) {
               const nextCartItems = state.orderItems.filter(
                  (item2) => item2.productId !== item.productId
               )
               state.orderItems = nextCartItems
            }
         })
         localStorage.setItem("cart", JSON.stringify(state.orderItems))
         return state
      },
      getTotal(state) {
         let { itemTotal, quantity } = state.orderItems.reduce(
            (cartTotal, cartItem) => {
               const { price, quantity } = cartItem;
               const total = price * quantity;

               cartTotal.itemTotal += total;
               cartTotal.quantity += quantity;
               return cartTotal
            },
            {
               itemTotal: 0,
               quantity: 0
            }
         );
         itemTotal = parseFloat(itemTotal.toFixed(2));
         state.itemsCount = quantity;
         state.totalPrice = itemTotal
      },
      cleartCart(state) {
         state.orderItems = [];
         localStorage.setItem("cart", JSON.stringify(state.orderItems))
      }
   }
})
export const { addToCart, removeFromCart, decreaseCart, getTotal } = cartSlice.actions
export default cartSlice.reducer