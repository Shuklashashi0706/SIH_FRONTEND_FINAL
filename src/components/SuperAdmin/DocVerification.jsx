import React, { useState } from "react";
import userDoc from "../../assets/UserDoc.jpg";
import govtDoc from "../../assets/GovtDoc.jpg";



function DocVerification() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-3/4 flex justify-between">
        {/* First Image */}
        <div className="w-3/4 p-4">
          <img
            src={userDoc}
            alt="User Document"
            className="w-full"
          />
          <p className="text-center mt-2">User Document</p>
        </div>

        {/* Second Image */}
        <div className="w-3/4 p-4">
          <img
            src={govtDoc}
            alt="Government Document"
            className="w-full"
          />
          <p className="text-center mt-2">Government Document</p>
        </div>
      </div>

      {/* Verified Button */}
      <button
        className="mt-4 px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
        onClick={handleVerification}
      >
        Verify
      </button>

      {/* Verification Message */}
      {isVerified && (
        <p className="mt-4 text-green-500 font-semibold">Verified</p>
      )}
    </div>
  );
}

export default DocVerification;
