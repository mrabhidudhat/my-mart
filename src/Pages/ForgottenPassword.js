import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/forgot-password";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
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
        setResetSuccess(true);
        setEmail(""); // Clear the email input
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
              <span className="block sm:inline">{successMessage}</span>
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
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
              Reset Password
            </button>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            {resetSuccess && (
              <div className="text-green-500">
                Password reset email sent successfully!
              </div>
            )}
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
