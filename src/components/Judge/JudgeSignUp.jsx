import React, { useState } from "react";
import { Link } from "react-router-dom";

const JudgeSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    accountType: "Judge",
    phoneNo: "",
    caseDomain: "",
    location: "",
    yearOfJoining: "",
  });

  const [alertMessage, setAlertMessage] = useState(""); // State for success alert

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/judge/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setAlertMessage(data.message);
      } else {
        console.error("Sign-up request failed.");
        setAlertMessage("Judge Already Registered"); // Clear any previous success message
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Signup Failed"); // Clear any previous success message
    }
  };

  return (
    <div className="min-h-screen pt-10">
      <div className="flex justify-center items-center">
        <div className="bg-white w-full max-w-md rounded-lg border border-purple shadow-md shadow-lg p-8 space-y-6">
          {alertMessage && (
            <div
              className={`${
                alertMessage === "Registration successful"
                  ? "bg-green-100 border border-green-400 text-green-700"
                  : "bg-red-100 border border-red-400 text-red-700"
              } px-4 py-3 rounded-md mb-4`}
            >
              {alertMessage}
            </div>
          )}

          <div className="text-2xl font-serif font-bold text-custom-text mb-6 flex items-center">
            Sign Up
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Phone Number"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="tel"
                id="location"
                name="location"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Domain"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Case Domain
              </label>
              <input
                type="tel"
                id="CaseDomain"
                name="caseDomain"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Domain"
                value={formData.caseDomain}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Year of Joining
              </label>
              <input
                type="tel"
                id="yearofjoining"
                name="yearOfJoining"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Year of Joining"
                value={formData.yearOfJoining}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-900 text-white font-bold py-2 rounded-md hover:bg-purple-900 mt-5"
              >
                Create Account
              </button>
            </div>
          </form>
          <Link to="login">
            <button className="w-full mt-4 bg-purple-900 text-white font-bold py-2 rounded-md hover:bg-purple-700">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JudgeSignUp;
