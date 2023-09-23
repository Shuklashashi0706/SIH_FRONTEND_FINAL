import React from "react";
import { Link, Navigate } from "react-router-dom";

function RequestStatus({ isUserAuthenticated }) {
  // If user is not authenticated, redirect to "/"
  if (!isUserAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-12 rounded border border-purple shadow-md shadow-lg p-12 space-y-6">
        <h1 className="text-4xl font-bold text-center text-custom-text mb-6">
          Welcome, User!
        </h1>
        <div className="space-y-4">
          <Link to="/all-requests">
            <button className="px-4 py-2 bg-custom-purple font-semibold text-custom-text rounded-lg hover:bg-purple-100 mr-3">
              Show All Requests Sent
            </button>
          </Link>
          <Link to="/accepted-requests">
            <button className="px-4 py-2 bg-custom-purple font-semibold text-custom-text rounded-lg hover:bg-purple-100 mr-3">
             Show Accepted Requests
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default RequestStatus;
