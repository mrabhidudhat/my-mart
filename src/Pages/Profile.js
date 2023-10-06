import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Profile = () => {
  const userData = useSelector((state) => state.user);
  const orders = [
    {
      id: 1,
      date: "06-10-2023",
      status: "Delivered",
      products: [
        { id: 1, name: "Product 1", price: "20₹", quantity: 2 },
        { id: 2, name: "Product 2", price: "15₹", quantity: 1 },
      ],
    },
    {
      id: 2,
      date: "06-10-2023",
      status: "Pending",
      products: [
        { id: 3, name: "Product 3", price: "30₹", quantity: 3 },
        { id: 4, name: "Product 4", price: "10₹", quantity: 1 },
      ],
    },
    {
      id: 3,
      date: "06-10-2023",
      status: "Cancelled",
      products: [{ id: 5, name: "Product 5", price: "25₹", quantity: 1 }],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-8 pt-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-semibold mb-4">Profile</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold">User Details</h2>
              <p className="text-gray-600">
                Full Name: {userData.firstName} {userData.lastName}
              </p>
              <p className="text-gray-600">Email: {userData.email}</p>
              <p className="text-gray-600">
                Mobile Number: {userData.mobileNumber}
              </p>
              <p className="text-gray-600">Address: {userData.address}</p>
              <p className="text-gray-600">City: {userData.city}</p>
              <p className="text-gray-600">Country: {userData.country}</p>
              <p className="text-gray-600">Zip Code: {userData.zipCode}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Order History</h2>
              <ul className="space-y-4">
                {orders.map((order) => (
                  <li key={order.id}>
                    <div className="mb-2">
                      <strong>Order Date:</strong> {order.date}
                    </div>
                    <div className="mb-2">
                      <strong>Status:</strong> {order.status}
                    </div>
                    <div>
                      <strong>Products:</strong>
                      <ul className="pl-4">
                        {order.products.map((product) => (
                          <li key={product.id}>
                            {product.name} (Quantity: {product.quantity}, Price:{" "}
                            {product.price})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
