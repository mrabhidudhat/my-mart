import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
// } from "../Redux/CartSlice";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Cart = () => {
  //   const cartItems = useSelector((state) => state.cart.cartItems);
  //   const dispatch = useDispatch();

  //   const increment = (itemId) => {
  //     dispatch(incrementQuantity(itemId));
  //   };

  //   const decrement = (itemId) => {
  //     dispatch(decrementQuantity(itemId));
  //   };

  //   const remove = (itemId) => {
  //     dispatch(removeItem(itemId));
  //   };

  //   const calculateTotal = () => {
  //     return cartItems.reduce((total, item) => {
  //       return total + item.price * item.quantity;
  //     }, 0);
  //   };

  return (
    <div>
      <Navbar />
      {/* <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mt-4">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div className="flex-1 ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="text-red-500 font-semibold"
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      onClick={() => increment(item.id)}
                      className="text-green-500 font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <p>Total: ${calculateTotal()}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div> */}
      <div className="text-5xl font-bold pt-20 opacity-80">Cart</div>
      <div className="pt-96"></div>
      <Footer />
    </div>
  );
};

export default Cart;
