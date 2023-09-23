import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const SendNotificationByLawyer = ({ isLawyerAuthenticated }) => {
    if (!isLawyerAuthenticated) {
      return <Navigate to="/" />;
    }
    const lawyerID = localStorage.getItem("lawyerId");
  const [to, setTo] = useState("");
  const [body, setBody] = useState("");

  const handleSendNotification = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/lawyer/sendNotification/${lawyerID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to, body }),
        }
      );

      if (response.ok) {
        alert(`Notification has been sent to ${to} successfully.`);
        setTo("");
        setBody("");
      } else {
        alert("Error sending the notification. Please try again.");
      }
    } catch (error) {
      console.error("Error sending the notification:", error);
      alert(
        "An error occurred while sending the notification. Please try again later."
      );
    }
  };

  return (
    <div className="bg-custom-purple p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl text-custom-text font-bold mb-4">Send Notification to Client 2</h1>
      <div className="mb-4">
        <label className="font-medium text-custom-text">Recipient's Phone Number: </label>
        <input
          type="text"
          className="bg-white rounded-lg border border-gray-300 p-2 w-full"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-medium text-custom-text">Message Body: </label>
        <textarea
          className="bg-white rounded-lg border border-gray-300 p-2 w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button
        className="bg-purple-900 font-medium text-white py-2 px-4 rounded-lg"
        onClick={handleSendNotification}
      >
        Send Notification
      </button>
    </div>
  );
};

export default SendNotificationByLawyer;
