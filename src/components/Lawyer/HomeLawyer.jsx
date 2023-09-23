import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function HomeLawyer({ isLawyerAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLawyerAuthenticated) {
      // If the lawyer is not authenticated, redirect to "/"
      navigate("/");
    }
  }, [isLawyerAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-12 rounded border border-purple shadow-md shadow-lg p-12 space-y-6">
      <h1 className="text-4xl font-bold text-center text-custom-text mb-6">Welcome, Lawyer!</h1>
      <div className="space-y-4">
        <Link to="/lawyer-info">
          <button className="bg-custom-purple hover:bg-purple-100 text-custom-text font-medium px-4 py-2 rounded-md mr-3">
            My Info
          </button>
        </Link>
        <Link to="/lawyer-requests">
          <button className="bg-custom-purple hover:bg-purple-100 text-custom-text font-medium px-4 py-2 rounded-md mr-3">
            My Requests
          </button>
        </Link>
        <Link to="/lawyer-accepted-users">
          <button className="bg-custom-purple hover:bg-purple-100 text-custom-text font-medium px-4 py-2 rounded-md mr-3">
            Accepted Users
          </button>
        </Link>
        <Link to="/lawyer-send-notification">
          <button className="bg-custom-purple hover:bg-purple-100 text-custom-text font-medium px-4 py-2 rounded-md mr-3">
            Send Notification to Client
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default HomeLawyer;
