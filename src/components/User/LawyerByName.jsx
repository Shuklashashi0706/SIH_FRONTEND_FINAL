import React, { useState } from "react";

const LawyerByName = ({isUserAuthenticated}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lawyerInfo, setLawyerInfo] = useState(null);
   if (!isUserAuthenticated) {
     return <Navigate to="/" />;
      }
  const handleSearch = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/getLawyerByName",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.lawyer) {
          setLawyerInfo(data.lawyer);
        } else {
          setLawyerInfo(null);
          alert("No lawyer exists with the provided name.");
        }
      } else {
        setLawyerInfo(null);
        alert("Error searching for the lawyer. Please try again.");
      }
    } catch (error) {
      setLawyerInfo(null);
      console.error("Error searching for the lawyer:", error);
      alert(
        "An error occurred while searching for the lawyer. Please try again later."
      );
    }
  };

  return (
    <div className="bg-custom-purple p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-custom-text mb-4">Search Lawyer by Name</h1>
      <div className="mb-4">
        <label className="font-semibold text-custom-text font-medium">First Name:</label>
        <input
          type="text"
          className="bg-white rounded-lg border border-gray-300 p-2 w-full"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold text-custom-text font-medium">Last Name:</label>
        <input
          type="text"
          className="bg-white rounded-lg border border-gray-300 p-2 w-full"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button
        className="bg-purple-900 text-white font-medium py-2 px-4 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
      {lawyerInfo && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Lawyer Information</h2>
          <div className="bg-white p-3 rounded-lg shadow">
            <img
              src={lawyerInfo.profileImage}
              alt={`${lawyerInfo.firstName} ${lawyerInfo.lastName}`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
          <p className="text-lg">
  <span className="font-medium text-custom-text">Name:</span>{" "}
  {lawyerInfo.firstName} {lawyerInfo.lastName}
</p>
<p className="text-lg">
  <span className="font-medium text-custom-text">Email:</span>{" "}
  {lawyerInfo.emailAddress}
</p>
<p className="text-lg">
  <span className="font-medium text-custom-text">Phone:</span>{" "}
  {lawyerInfo.phoneNo}
</p>
<p className="text-lg">
  <span className="font-medium text-custom-text">Case Domain:</span>{" "}
  {lawyerInfo.caseDomain}
</p>
<p className="text-lg">
  <span className="font-medium text-custom-text">Location:</span>{" "}
  {lawyerInfo.location}
</p>
<p className="text-lg">
  <span className="font-medium text-custom-text">Year of Joining:</span>{" "}
  {lawyerInfo.yearOfJoining}
</p>

          </div>
        </div>
      )}
    </div>
  );
};

export default LawyerByName;
