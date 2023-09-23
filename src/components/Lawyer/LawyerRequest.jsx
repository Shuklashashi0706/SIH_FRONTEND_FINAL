import React, { useState, useEffect } from "react";

const LawyerRequest = () => {
  const [requests, setRequests] = useState([]);
  const lawyerID = localStorage.getItem("lawyerId");

  // Fetch lawyer requests data for a specific lawyer
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/lawyer/getAllRequests/${lawyerID}`
        );
        if (response.ok) {
          const data = await response.json();
          setRequests(data.Requests);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRequests();
  }, [lawyerID]);

  // Handle DELETE request when the delete button is clicked
  const handleDeleteRequest = async (notificationId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/lawyer/deleteRequest`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notificationId }),
        }
      );

      if (response.ok) {
        // Request was successfully deleted
        const updatedRequests = requests.filter(
          (request) => request.notificationId !== notificationId
        );

        setRequests(updatedRequests);

        // Notify success using an alert
        alert("Request successfully deleted.");
      } else {
        // Handle request failure and notify using an alert
        console.error("Error deleting request:", response.statusText);
        alert("Cannot delete the request. Please try again.");
      }
    } catch (error) {
      // Handle any exceptions and notify using an alert
      console.error("Error deleting request:", error);
      alert(
        "An error occurred while deleting the request. Please try again later."
      );
    }
  };

  // Handle PATCH request when the accept button is clicked
  const handleAcceptRequest = async (notificationId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/lawyer/acceptRequest/${lawyerID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notificationId }),
        }
      );

      if (response.ok) {
        // Request was successfully accepted
        const updatedRequests = requests.map((request) => {
          if (request.notificationId === notificationId) {
            request.user.accepted = true;
          }
          return request;
        });

        setRequests(updatedRequests);

        // Notify success using an alert
        alert("Request successfully accepted.");
      } else {
        // Handle request failure and notify using an alert
        console.error("Error accepting request:", response.statusText);
        alert("Request already accepted or cannot be accepted.");
      }
    } catch (error) {
      // Handle any exceptions and notify using an alert
      console.error("Error accepting request:", error);
      alert(
        "An error occurred while accepting the request. Please try again later."
      );
    }
  };

  return (
    <div className="bg-custom-purple p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl text-custom-text font-bold mb-4">Lawyer Requests</h1>
      <div className="mt-4">
        {requests.map((request) => (
          <div
            key={request.notificationId}
            className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between"
          >
            <div>
            <p className="font-semibold">
  <span className="font-medium text-custom-text">User:</span>{" "}
  {request.user.firstName} {request.user.lastName}
</p>
<p>
  <span className="font-medium text-custom-text">Email:</span>{" "}
  {request.user.emailAddress}
</p>
<p>
  <span className="font-medium text-custom-text">Phone:</span>{" "}
  {request.user.phoneNo}
</p>

              <button
                className="bg-purple-900 text-white font-medium py-2 px-4 rounded-lg mr-2"
                onClick={() => handleDeleteRequest(request.notificationId)}
              >
                Delete Request
              </button>
            </div>
            <div>
              {request.user.accepted ? (
                <button
                  className="bg-bpurple text-custom-text font-medium py-2 px-4 rounded-lg mr-2"
                  disabled
                >
                  Accepted
                </button>
              ) : (
                <button
                  className="bg-purple-900 font-medium text-white py-2 px-4 rounded-lg mr-2"
                  onClick={() => handleAcceptRequest(request.notificationId)}
                >
                  Accept
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerRequest;
