import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AcceptedRequests = ({isUserAuthenticated}) => {
  const [acceptedLawyers, setAcceptedLawyers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  if (!isUserAuthenticated) {
    return <Navigate to="/" />;
  }
  // Get userID from localStorage
  const userID = localStorage.getItem("userId");
  useEffect(() => {

    // Check if userID exists
    if (!userID) {
      setErrorMessage("User ID not found in localStorage");
      return;
    }

    // Define the API endpoint
    const apiUrl = `http://localhost:5000/api/user/getAcceptedRequests/${userID}`;

    // Simulate fetching data (replace with your actual API call)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.acceptedLawyers && data.acceptedLawyers.length > 0) {
          setAcceptedLawyers(data.acceptedLawyers);
        } else {
          setErrorMessage("No lawyers have accepted your requests");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErrorMessage("An error occurred while fetching data");
      });
  }, []);

  return (
    
      <div className="bg-white p-12 rounded border border-purple shadow-md shadow-lg p-12 space-y-6">
        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div className="space-y-4">
            {acceptedLawyers.map((lawyer) => (
              <div key={lawyer._id} className="bg-gray-100 p-4 rounded">
                <img
                  src={lawyer.profileImage}
                  alt={`${lawyer.firstName} ${lawyer.lastName}`}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold">
                  {lawyer.firstName} {lawyer.lastName}
                </h2>
                <p>Email: {lawyer.emailAddress}</p>
                <p>Case Domain: {lawyer.caseDomain}</p>
                <p>Location: {lawyer.location}</p>
                <p>Year of Joining: {lawyer.yearofJoining}</p>
              </div>
            ))}
          </div>
        )}
      </div>
   
  );
};

export default AcceptedRequests;
