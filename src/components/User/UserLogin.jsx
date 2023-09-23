import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin({
  setIsUserAuthenticated, // You can use this function to update the authentication state
}) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success' for green, 'error' for red
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress,
          password,
          accountType: "user", // Default account type as user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If the response status is OK (2xx), it's a successful login
        setAlertType("success");
        setAlertMessage("Login successful");
        localStorage.setItem("userId", data.user._id);

        // Update the authentication state to true
        setIsUserAuthenticated(true);

        navigate("/home-user");
      } else {
        // If the response status is not OK, it's a login failure
        setAlertType("error");
        setAlertMessage(
          data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle any network or other errors
      setAlertType("error");
      setAlertMessage(
        "An error occurred during login. Please try again later."
      );
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      {alertMessage && (
        <div
          className={`${
            alertType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white p-2 rounded-md text-center w-80 mx-auto mb-4`}
        >
          {alertMessage}
        </div>
      )}
      <div className="bg-white p-8 rounded shadow-md w-80">

        <h1 className="text-3xl font-bold text-custom-text text-center mb-4">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button

          className="block w-full bg-purple-900 text-white rounded-md py-2 hover:bg-purple-800 transition duration-300"

          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
