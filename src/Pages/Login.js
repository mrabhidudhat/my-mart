import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
// import { useDispatch } from "react-redux";
import localStorage from "redux-persist/es/storage";
// import { login } from "../Redux/UserSlice";

const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/login";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      setLoading(false);

      if (response.ok) {
        setErrorMessage("");
        setLoginSuccess(true);

        const userData = await response.json();
        // console.log("userdata::>", userData);
        const accessToken = userData.results.tokens.accessToken;
        localStorage.setItem("accessToken", accessToken);
        // console.log("Access token::>", accessToken);
        const refreshToken = userData.results.tokens.refreshToken;
        localStorage.setItem("refreshToken", refreshToken);
        // console.log("Refresh token::>", refreshToken);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setErrorMessage("User is not registered. Please create an account.");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [loginSuccess, navigate]);

  return (
    <>
      <Navbar />
      <div
        className={`flex items-center justify-center min-h-screen p-4 ${
          loading ? "opacity-50 relative" : ""
        }`}
      >
        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="loader border-t-4 border-b-4 border-blue-500 h-8 w-8 rounded-full animate-spin"></div>
          </div>
        )}
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-4">
          <h1 className="text-3xl font-semibold mb-4">Sign in</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abcd@email.com"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInputChange}
              value={credentials.email}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInputChange}
              value={credentials.password}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 relative"
            >
              Sign In
            </button>
            <p className="pt-4">
              Don't have an Account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          {loginSuccess && (
            <div className="text-green-500 mb-4">Login successful!</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
