// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       if (item.quantity > 1) {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;
// export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
//   cartSlice.actions;
