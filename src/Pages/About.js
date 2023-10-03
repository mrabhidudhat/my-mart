import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 py-10 pt-28">
        <div className="container mx-auto p-5">
          <h1 className="text-3xl font-semibold mb-4">About My Mart </h1>
          <div className="max-w-screen-md">
            <p className="text-gray-700 text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              voluptas asperiores ipsam unde quaerat temporibus? Debitis amet
              eius placeat ipsam, dicta dolorum nobis porro adipisci!
            </p>
          </div>

          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
