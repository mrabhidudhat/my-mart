import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  });
  const [errorMsgFname, setErrorMsgFname] = useState("");
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgMono, setErrorMsgMono] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...value,
      [name]: value,
    });

  const handleInputChangeFname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = /^[A-Za-z]+$/.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Fname: inputValue,
    }));
    if (!isAlphabetic) {
      setErrorMsgFname("Please enter a valid name");
    } else {
      setErrorMsgFname("");
    }
  };

  const handleInputChangeEmail = (e) => {
    const inputValue = e.target.value;
    const isEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Email: inputValue,
    }));
    if (!isEmail) {
      setErrorMsgEmail("Invalid Email");
    } else {
      setErrorMsgEmail("");
    }
  };

  const handleInputChangeMono = (e) => {
    const inputValue = e.target.value;
    const isMono = /^\d+$/.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Mono: inputValue,
    }));
    if (!isMono) {
      setErrorMsgMono("Enter only numbers");
    } else {
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
      value.ZipCode === ""
    ) {
      alert("Please Enter Information");
    } else {
      const newFormdata = { ...value };
      dispatch(addFormData(newFormdata));
      setValue({
        Fname: "",
        Email: "",
        Mono: "",
        Password: "",
        Address: "",
        city: "",
        Country: "",
        ZipCode: "",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-4 pt-28">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-4">
          <h1 className="text-3xl font-semibold underline  mb-4">
            Create Your Account
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="Fname"
              value={value.Fname}
              placeholder="Full Name"
              onChange={handleInputChangeFname}
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
              onChange={handleInputChangeEmail}
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
              name="Mnumber"
              value={value.Mono}
              onChange={handleInputChangeMono}
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
              name="password"
              value={value.Password}
              // onChange={handleInputChangePwd}
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {/* {errorMsgPwd && <p style={{ color: "red" }}>{errorMsgPwd}</p>} */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={value.Address}
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
              name="country"
              value={value.Country}
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
              name="number"
              value={value.ZipCode}
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              maxLength={6}
              required
            />
          </div>
          <div>
            <label>
              <input type="checkbox" name="agreeTerms" /> I agree to the OREBI
              Terms of Service and Privacy Policy.
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
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
  );
};

export default SignUp;
