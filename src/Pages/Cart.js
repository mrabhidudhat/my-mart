import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/CartSlice";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import EmptyCartImage from "../Asset/emptyCart.png";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity({ id: productId }));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity({ id: productId }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const shippingCharge = totalAmount >= 500 ? 0 : 50;

  const [isNewUser, setIsNewUser] = useState(true);

  const handleBuyNowClick = () => {
    if (isNewUser) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 px-4">
        <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="w-64 h-64 mb-4"
            />
            <p className="text-xl mb-4">Your cart is empty.</p>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
              Go to Home
            </Link>
          </div>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="mb-4 border-b border-gray-300 pb-4 flex flex-wrap"
                >
                  <div className="w-full md:w-1/2 md:flex">
                    <div className="md:flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="md:ml-4 mt-2 md:mt-0">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 md:flex items-center justify-between mt-2 md:mt-0">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrementQuantity(item.id)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrementQuantity(item.id)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold">{item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <p className="text-2xl font-semibold">
                Total Amount: {totalAmount.toFixed(2)} ₹
              </p>
              <p className="text-2xl font-semibold">
                Shipping Charge: {shippingCharge} ₹
              </p>
              <p className="text-2xl font-semibold">
                Total Amount with Shipping:{" "}
                {(totalAmount + shippingCharge).toFixed(2)} ₹
              </p>
              <button
                onClick={handleBuyNowClick}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="pt-60"></div>
      <Footer />
    </>
  );
};

export default Cart;
