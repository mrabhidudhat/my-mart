import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handleSubscribe = () => {
    if (isValidEmail) {
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-blue-400 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-xl font-semibold">More about Orebi Shop</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Shop</h2>
            <ul className="mt-2">
              <li>Accessories</li>
              <li>Clothes</li>
              <li>Electronics</li>
              <li>Home appliances</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Your account</h2>
            <ul className="mt-2">
              <li>Profile</li>
              <li>Orders</li>
              <li>Addresses</li>
              <li>Account Details</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2">
              A at pellentesque et mattis porta enim elementum.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Insert your email ..."
                className={`w-full px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring focus:border-blue-300 ${
                  isValidEmail ? "" : "border-red-500"
                }`}
                value={email}
                onChange={handleChange}
              />
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            {!isValidEmail && (
              <p className="text-red-500 text-sm mt-2">
                *Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-blue-500 py-2 text-center">
        <p className="text-sm">
          Copyright 2022 | Orebi shopping | All Rights Reserved | Powered by
          ReactBD.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
