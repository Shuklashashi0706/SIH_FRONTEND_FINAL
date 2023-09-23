LandingPage.jsx;
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage({
  isUserAuthenticated,
  isLawyerAuthenticated,
  isJudgeAuthenticated,
  setIsUserAuthenticated,
  setIsLawyerAuthenticated,
  setIsJudgeAuthenticated,
}) {
  // Set all authentication states to false when the component loads
  React.useEffect(() => {
    setIsUserAuthenticated(false);
    setIsLawyerAuthenticated(false);
    setIsJudgeAuthenticated(false);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="bg-white h-screen flex justify-center items-center">
    <div className="bg-white p-12 rounded border border-purple shadow-md shadow-lg p-12 space-y-6">
        <h1 className="text-3xl font-bold text-center text-custom-text mb-4 pb-12">
          Choose Your Role
        </h1>
        <div className="space-y-4">
          <Link
            to="/user"
            className="block px-4 font-serif py-2 bg-custom-purple text-custom-text rounded hover:bg-purple-200 transition duration-300"
          >
            User
          </Link>
          <Link
            to="/lawyer"
            className="block px-4 font-serif py-2 bg-custom-purple text-custom-text rounded hover:bg-purple-200 transition duration-300"
          >
            Lawyer
          </Link>
          <Link
            to="/judge"
            className="block px-4 font-serif py-2 bg-custom-purple text-custom-text rounded hover:bg-purple-200 transition duration-300"
          >
            Judge
          </Link>
          <Link
            to="/superAdmin/login"
            className="block px-4 font-serif py-2 bg-custom-purple text-custom-text rounded hover:bg-purple-200 transition duration-300"
          >
            Super Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
