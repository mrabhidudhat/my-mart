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
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600"
              >
                Add to Cart
              </button>
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                Add to Cart
              </button> */}
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




import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/signup";

const SignUp = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    agreeTerms: false,
  });

  const [errorMsgfullname, setErrorMsgfullname] = useState("");
  const [errorMsgemail, setErrorMsgemail] = useState("");
  const [errorMsgmobile, setErrorMsgmobile] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setValue((prevValue) => ({
        ...prevValue,
        [name]: checked,
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }

    if (name === "fullname") {
      setErrorMsgfullname("");
    } else if (name === "email") {
      setErrorMsgemail("");
    } else if (name === "mobile") {
      setErrorMsgmobile("");
    }
  };

  const handleSubmit = async () => {
    if (
      value.fullname === "" ||
      value.email === "" ||
      value.mobile === "" ||
      value.password === "" ||
      value.address === "" ||
      value.city === "" ||
      value.country === "" ||
      value.zipcode === ""
    ) {
      alert("Please enter all required information.");
    } else {
      if (!value.agreeTerms) {
        alert("Accept Terms and Condition");
      } else {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
          });

          if (!response.ok) {
            throw new Error("Request failed");
          }

          const result = await response.json();
          setSuccessMessage("Account created successfully!");
          setValue({
            fullname: "",
            email: "",
            mobile: "",
            password: "",
            address: "",
            city: "",
            country: "",
            zipcode: "",
            agreeTerms: false,
          });
        } catch (error) {
          console.error("Error:", error);
          // Handle error as needed, e.g., display an error message to the user.
        }
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen p-4 pt-28">
          <div className="w-full max-w-md bg-white shadow-md rounded-md p-4">
            <h1 className="text-3xl font-semibold underline  mb-4">
              Create Your Account
            </h1>
            {successMessage && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <span className="block sm:inline">{successMessage}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setSuccessMessage("")}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                  </svg>
                </span>
              </div>
            )}
            {/* Rest of your form elements */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Create Account
              </button>
              <p className="pt-4">
                Already have an Account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
