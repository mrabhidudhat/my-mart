import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../Asset/banner/bannerImgOne.png";
import Carousel2 from "../Asset/banner/bannerImgTwo.png";
import Carousel3 from "../Asset/banner/bannerImgThree.png";
import sale1 from "../Asset/sale/saleImgOne.png";
import sale2 from "../Asset/sale/saleImgTwo.png";
import sale3 from "../Asset/sale/saleImgThree.png";
import newarr1 from "../Asset/products/newArrival/newArrOne.png";
import newarr2 from "../Asset/products/newArrival/newArrTwo.png";
import newarr3 from "../Asset/products/newArrival/newArrThree.png";
import newarr4 from "../Asset/products/newArrival/newArrFour.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Component/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const handleOnChange = (index) => {
    setSelectedSlide(index);
  };
  //--------
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  //---------

  //  products array
  const products = [
    {
      id: 1,
      name: "Flower Base 1",
      description: "Blank and White",
      price: "35.00 ₹",
      image: newarr1,
    },
    {
      id: 2,
      name: "Flower Base 2",
      description: "Blank and White",
      price: "35.00 ₹",
      image: newarr2,
    },
    {
      id: 3,
      name: "Flower Base 3",
      description: "Blank and White",
      price: "35.00 ₹",
      image: newarr3,
    },
    {
      id: 4,
      name: "Flower Base 4",
      description: "Blank and White",
      price: "35.00 ₹",
      image: newarr4,
    },
  ];
  return (
    <>
      <Navbar />

      <Carousel
        className="pt-28"
        showThumbs={true}
        selectedItem={selectedSlide}
        onChange={handleOnChange}
      >
        <div>
          <img src={Carousel1} alt="Carousel 1" />
        </div>
        <div>
          <img src={Carousel2} alt="Carousel 2" />
        </div>
        <div>
          <img src={Carousel3} alt="Carousel 3" />
        </div>
      </Carousel>
      <div className="flex justify-between text-xs md:text-xl p-5 pb-5">
        <div className="p-2 rounded-lg  hover:shadow-xl">2 Year Warranty</div>
        <div className="p-2 rounded-lg  hover:shadow-xl">⛟ Free Shipping</div>
        <div className="p-2 rounded-lg  hover:shadow-xl">
          ↻ Return policy in 30 days
        </div>
      </div>
      <div className="border-[1px] opacity-10 w-full border-slate-500"></div>
      <div className="flex p-5">
        <div>
          <img src={sale1} alt="sale 1" />
        </div>
        <div className="pl-2">
          <img className="pb-2" src={sale2} alt="sale 2" />
          <img className="pt-2" src={sale3} alt="sale 3" />
        </div>
      </div>

      {/* New Arrivals */}
      <div className="text-3xl font-bold mt-8 ml-8 pb-5">New Arrivals</div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div className="w-full sm:w-1/2 md:w-1/4 p-4" key={product.id}>
            <div className="border-[1px] relative group ">
              <img
                src={product.image}
                alt={product.name}
                className="transition-transform transform hover:-translate-y-2 w-full"
              />
              <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <div className="text-gray-500 mb-2">{product.description}</div>
                <div className="font-semibold text-xl">{product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
