import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useDispatch } from "react-redux";
import { addFormData } from "../Redux/Slice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    Fname: "",
    Email: "",
    Mono: "",
    Password: "",
    Address: "",
    city: "",
    Country: "",
    ZipCode: "",
    agreeTerms: false,
  });

  const [errorMsgFname, setErrorMsgFname] = useState("");
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgMono, setErrorMsgMono] = useState("");
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

    if (name === "Fname") {
      setErrorMsgFname("");
    } else if (name === "Email") {
      setErrorMsgEmail("");
    } else if (name === "Mono") {
      setErrorMsgMono("");
    }
  };

  const handleSubmit = () => {
    if (
      value.Fname === "" ||
      value.Email === "" ||
      value.Mono === "" ||
      value.Password === "" ||
      value.Address === "" ||
      value.city === "" ||
      value.Country === "" ||
      value.ZipCode === "" ||
      !value.agreeTerms
    ) {
      alert("Please enter all required information and accept the terms.");
    } else {
      const newFormData = { ...value };
      dispatch(addFormData(newFormData));
      setValue({
        Fname: "",
        Email: "",
        Mono: "",
        Password: "",
        Address: "",
        city: "",
        Country: "",
        ZipCode: "",
        agreeTerms: false,
      });
      setSuccessMessage("Account created successfully!");
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="Fname"
                value={value.Fname}
                placeholder="Full Name"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              {errorMsgFname && <p style={{ color: "red" }}>{errorMsgFname}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Id
              </label>
              <input
                type="text"
                name="Email"
                value={value.Email}
                onChange={handleInputChange}
                placeholder="abcd@email.com"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              {errorMsgEmail && <p style={{ color: "red" }}>{errorMsgEmail}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile No
              </label>
              <input
                type="text"
                name="Mono"
                value={value.Mono}
                onChange={handleInputChange}
                placeholder="0123456789"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
                maxLength={10}
                required
              />
              {errorMsgMono && <p style={{ color: "red" }}>{errorMsgMono}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="Password"
                value={value.Password}
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
                name="Address"
                value={value.Address}
                onChange={handleInputChange}
                placeholder="House No."
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
                placeholder="Your City"
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
                name="Country"
                value={value.Country}
                onChange={handleInputChange}
                placeholder="Your Country"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Zip Code
              </label>
              <input
                type="text"
                name="ZipCode"
                value={value.ZipCode}
                onChange={handleInputChange}
                placeholder="Create password"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
                maxLength={6}
                required
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={value.agreeTerms}
                  onChange={handleInputChange}
                />{" "}
                I agree to the OREBI Terms of Service and Privacy Policy.
              </label>
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
