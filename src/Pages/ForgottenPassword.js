import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/forgot-password";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setLoading(false);

      if (response.ok) {
        setErrorMessage("");
        setSuccessMessage("Password reset email sent successfully!");
        setEmail(""); 
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-4">
          <h1 className="text-3xl font-semibold mb-4">Forgot Password</h1>
          {successMessage && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              {errorMessage}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleResetPassword}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 relative"
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
            <p className="pt-4">
              Remember your password?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
