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
      const myValue = {
        fullname: value.fullname,
        email: value.email,
        mobile: value.mobile,
        password: value.password,
        address: value.address,
        city: value.city,
        country: value.country,
        zipcode: value.zipcode,
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myValue),
        });

        if (response.ok) {
          setSuccessMessage("Account created successfully!");
        } else if (response.status === 409) {
          setValue({
            fullname: "",
            email: "",
            mobile: "",
            password: "",
            address: "",
            city: "",
            country: "",
            zipcode: "",
          });
          setErrorMsgemail("User is already registered. Please login.");
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
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
            </div>
          )}
          {errorMsgemail && (
            <div className="text-red-500 mb-4">{errorMsgemail}</div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={value.fullname}
              placeholder="Full Name"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {errorMsgfullname && (
              <p style={{ color: "red" }}>{errorMsgfullname}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              email Id
            </label>
            <input
              type="text"
              name="email"
              value={value.email}
              onChange={handleInputChange}
              placeholder="abcd@email.com"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile No
            </label>
            <input
              type="text"
              name="mobile"
              value={value.mobile}
              onChange={handleInputChange}
              placeholder="0123456789"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              maxLength={10}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              password
            </label>
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleInputChange}
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={value.address}
              onChange={handleInputChange}
              placeholder="Your Address"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={value.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={value.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zipcode
            </label>
            <input
              type="text"
              name="zipcode"
              value={value.zipcode}
              onChange={handleInputChange}
              placeholder="Zipcode"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Create Account
            </button>
            <p className="pt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
