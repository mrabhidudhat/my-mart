import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("access token::>", accessToken);
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("refresh token::>", refreshToken);

    if (accessToken) {
      if (tokenHasExpired(accessToken)) {
        if (refreshToken) {
          refreshAccessToken(refreshToken);
        } else {
          setLoading(false);
        }
      } else {
        fetchUserProfileData(accessToken);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const tokenHasExpired = (accessToken) => {
    try {
      const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));
      const expirationTimestamp = decodedToken.exp * 1000;
      return Date.now() >= expirationTimestamp;
    } catch (error) {
      console.error("Error decoding or parsing access token:", error);
      return true;
    }
  };

  const refreshAccessToken = async (refreshToken) => {
    try {
      const apiUrl = "https://auth-genius.vercel.app/api/v1/auth/token";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        const tokens = await response.json();
        const newAccessToken = tokens.accessToken;
        console.log("newAccessToken::>", newAccessToken);

        // Store the new access token in local storage
        localStorage.setItem("accessToken", newAccessToken);

        // Fetch user data with the new access token
        fetchUserProfileData(newAccessToken);
      } else {
        // Handle token refresh failure
        setLoading(false);
        console.error("Failed to refresh access token");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const fetchUserProfileData = async (accessToken) => {
    try {
      const apiUrl = "https://auth-genius.vercel.app/api/v1/users/profile";
      console.log("Fetching user data with access token:", accessToken);
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("featch user profiledata::>", fetchUserProfileData);
      if (response.ok) {
        const userData = await response.json();
        console.log("User data:", userData);
        setUserData(userData.results.user);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to fetch user profile data");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-8 pt-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-semibold mb-4">Profile</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="mb-6">
                <h2 className="text-xl font-semibold">User Details</h2>
                <p className="text-gray-600">Full Name: {userData.fullname}</p>
                <p className="text-gray-600">Email: {userData.email}</p>
                <p className="text-gray-600">Mobile No: {userData.mobile}</p>
                <p className="text-gray-600">Address: {userData.address}</p>
                <p className="text-gray-600">City: {userData.city}</p>
                <p className="text-gray-600">Country: {userData.country}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
