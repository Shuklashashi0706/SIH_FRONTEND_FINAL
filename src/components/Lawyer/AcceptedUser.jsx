import React, { useState, useEffect } from "react";

const AcceptedUser = () => {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const lawyerID = localStorage.getItem("lawyerId");

  useEffect(() => {
    // Fetch accepted users based on lawyerID
    const fetchAcceptedUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/lawyer/getAcceptedRequests/${lawyerID}`
        );
        const data = await response.json();

        if (response.ok) {
          setAcceptedUsers(data.acceptedUsers);
        } else {
          // Handle error here if needed
          console.error("Failed to fetch accepted users");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAcceptedUsers();
  }, [lawyerID]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-custom-text font-bold mb-4">
        Accepted Clients
      </h1>
      {loading ? (
        <p className="text-lg">Loading accepted clients...</p>
      ) : acceptedUsers.length > 0 ? (
        <div>
          {acceptedUsers.map((user) => (
            <div key={user._id} className="border border-gray-300 p-4 mb-4">
<p className="text-lg">
  <span className="text-custom-text font-medium">Name:</span>{" "}
  {user.firstName} {user.lastName}
</p>
<p className="text-lg">
  <span className="text-custom-text font-medium">Email Address:</span>{" "}
  {user.emailAddress}
</p>
<p className="text-lg">
  <span className="text-custom-text font-medium">Phone Number:</span>{" "}
  {user.phoneNo}
</p>

              <button className="px-2 py-1 bg-purple-900 font-medium text-white rounded-lg purplr-800">
                Chat with the client
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-lg">No accepted clients.</div>
      )}
    </div>
  );
};

export default AcceptedUser;
