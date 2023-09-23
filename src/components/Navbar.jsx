import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  isUserAuthenticated,
  isLawyerAuthenticated,
  isJudgeAuthenticated,
  setIsUserAuthenticated,
  setIsLawyerAuthenticated,
  setIsJudgeAuthenticated,
}) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication states and navigate to "/"
    setIsUserAuthenticated(false);
    setIsLawyerAuthenticated(false);
    setIsJudgeAuthenticated(false);
    navigate("/");
  };

  let homeLink;

  if (isUserAuthenticated) {
    homeLink = "/home-user";
  } else if (isLawyerAuthenticated) {
    homeLink = "/home-lawyer";
  } else if (isJudgeAuthenticated) {
    homeLink = "/home-judge";
  } else {
    homeLink = "/";
  }

  return (
    <nav className="bg-custom-purple text-black p-4 shadow-lg">
  <div className="container mx-auto flex items-center justify-between">
    <Link to="/">
      <div className="text-2xl font-bold text-black-200">ONLAWTHINK!</div>
    </Link>
    <div className="flex items-center space-x-4 ml-6">
      <Link to={homeLink} className="text-1xl font-serif text-custom-text pr-4">Home</Link>
      <Link to="/" className="text-1xl font-serif text-custom-text pr-4">Contact</Link>
      <Link to="/" className="text-1xl font-serif text-custom-text pr-4">Helpline</Link>
      <div className="space-x-4">
        {/* ... (other links) ... */}
        {isUserAuthenticated ||
        isLawyerAuthenticated ||
        isJudgeAuthenticated ? (
          <button
            className="text-1xl font-serif text-custom-text pr-4"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : null}
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
