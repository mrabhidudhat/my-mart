import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
// import localStorage from "redux-persist/es/storage";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";

const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/login";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // const fullname = localStorage.getItem;

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
        const accessToken = userData.results.tokens.accessToken;
        localStorage.setItem("accessToken", accessToken);
        const refreshToken = userData.results.tokens.refreshToken;
        localStorage.setItem("refreshToken", refreshToken);
        // const fullname = userData.results.user.fullname;
        // localStorage.setItem("fullname", fullname);
        // console.log("fullname::>", fullname);

        dispatch(
          login({
            fullname: userData.fullname,
            accessToken: accessToken,
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setErrorMessage("User is not registered. Please create an account.");
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
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
        className={`flex items-center justify-center relative min-h-screen p-4 ${
          loading || errorMessage || loginSuccess ? "opacity-50 relative" : ""
        }`}
      >
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
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
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="bg-slate-100 text-black font-semibold shadow-2xl text-center pt-6  py-2 px-4 rounded-md h-20 opacity-100">
                {errorMessage}
              </div>
            </div>
          )}
          {loginSuccess && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-slate-100 text-black font-semibold  shadow-2xl text-center h-16 w-60 pt-5  py-2 px-4 rounded-md opacity-100">
                Login successful!
              </div>
            </div>
          )}
          <p className="text-center mt-2">
            <Link
              to="/forgotpassword"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
