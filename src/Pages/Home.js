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
import ourBest1 from "../Asset/products/bestSeller/bestSellerOne.png";
import ourBest2 from "../Asset/products/bestSeller/bestSellerTwo.png";
import ourBest3 from "../Asset/products/bestSeller/bestSellerThree.png";
import ourBest4 from "../Asset/products/bestSeller/bestSellerFour.png";
import proOfYear from "../Asset/products/productOfTheYear.png";
import spOfr1 from "../Asset/products/specialOffer/spfOne.png";
import spOfr2 from "../Asset/products/specialOffer/spfTwo.png";
import spOfr3 from "../Asset/products/specialOffer/spfThree.png";
import spOfr4 from "../Asset/products/specialOffer/spfFour.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Component/Footer";

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleOnChange = (index) => {
    setSelectedSlide(index);
  };

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
        {/* Product 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={newarr1}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={newarr2}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={newarr3}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={newarr4}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Bestsellers */}
      <div className="text-3xl font-bold mt-8 ml-8 pb-5">Our Bestsellers</div>
      <div className="flex flex-wrap justify-center">
        {/* Product 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={ourBest1}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={ourBest2}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={ourBest3}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={ourBest4}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>
      </div>
      {/* Product of the Year */}
      <div className="text-3xl font-bold mt-8 ml-8">Product of the Year</div>
      <div className="relative">
        <img
          src={proOfYear}
          className="pt-10 pb-10"
          alt="Product of the Year"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center pl-[50rem] ">
          <div className="text-black font-bold text-4xl">
            Product of The Year
          </div>
          <p className="text-black text-lg my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-28">
            Shop Now
          </button>
        </div>
      </div>

      {/* Special Offers*/}
      <div className="text-3xl font-bold mt-8 ml-8 pb-5">Special Offers</div>
      <div className="flex flex-wrap justify-center pb-20">
        {/* Product 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={spOfr1}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={spOfr2}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={spOfr3}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border-[1px] relative group ">
            <img
              src={spOfr4}
              alt="Product 1"
              className="transition-transform transform hover:-translate-y-2 w-full"
            />
            <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
