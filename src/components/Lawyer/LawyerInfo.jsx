import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const LawyerInfo = ({ isLawyerAuthenticated }) => {
  if (!isLawyerAuthenticated) {
    return <Navigate to="/" />;
  }
  const [lawyerData, setLawyerData] = useState(null);
  const [bio, setBio] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [newAchievement, setNewAchievement] = useState("");
  const [newQualification, setNewQualification] = useState("");
  const [updateCounter, setUpdateCounter] = useState(0); // State to trigger re-render
  const lawyerID = localStorage.getItem("lawyerId");

  useEffect(() => {
    // Fetch lawyer information based on lawyerID
    const fetchLawyerInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/lawyer/getLawyerById/${lawyerID}`
        );
        const data = await response.json();

        if (response.ok) {
          setLawyerData(data.lawyer);
          setBio(data.lawyer.bio);
          setAchievements([...data.lawyer.achievements]);
          setQualifications([...data.lawyer.qualifications]);
        } else {
          // Handle error here if needed
          console.error("Failed to fetch lawyer information");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchLawyerInfo();
  }, [lawyerID, updateCounter]); // Include updateCounter in dependencies

  const handleBioUpdate = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/lawyer/addProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lawyerId: lawyerID,
            bio: bio,
            achievements: achievements,
            qualifications: qualifications,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setLawyerData(data.lawyer);
      } else {
        // Handle error here if needed
        console.error("Failed to update bio");
      }
    } catch (error) {
      console.error("Error updating bio: ", error);
    }
  };

  const handleAchievementsUpdate = async () => {
    try {
      const updatedAchievements = [...achievements, newAchievement];

      const response = await fetch(
        "http://localhost:5000/api/lawyer/addProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lawyerId: lawyerID,
            bio: bio,
            achievements: updatedAchievements,
            qualifications: qualifications,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setLawyerData(data.lawyer);
        setNewAchievement("");
        setUpdateCounter((prevCounter) => prevCounter + 1); // Trigger re-render
      } else {
        // Handle error here if needed
        console.error("Failed to update achievements");
      }
    } catch (error) {
      console.error("Error updating achievements: ", error);
    }
  };

  const handleQualificationsUpdate = async () => {
    try {
      const updatedQualifications = [...qualifications, newQualification];

      const response = await fetch(
        "http://localhost:5000/api/lawyer/addProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lawyerId: lawyerID,
            bio: bio,
            achievements: achievements,
            qualifications: updatedQualifications,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setLawyerData(data.lawyer);
        setNewQualification("");
        setUpdateCounter((prevCounter) => prevCounter + 1); // Trigger re-render
      } else {
        // Handle error here if needed
        console.error("Failed to update qualifications");
      }
    } catch (error) {
      console.error("Error updating qualifications: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-custom-text text-center font-bold mb-4">
        Lawyer Information displayed to client
      </h1>
      {lawyerData ? (
        <div>
          <div>
            {lawyerData.profileImage && (
              <img
                src={lawyerData.profileImage}
                alt={`${lawyerData.firstName} ${lawyerData.lastName}`}
                className="w-32 h-32 rounded-full mx-auto"
              />
            )}
          </div>
          <p className="text-lg">
  <span className="text-custom-text font-semibold">Name:</span>{" "}
  <span className="text-black">
    {lawyerData.firstName} {lawyerData.lastName}
  </span>
</p>
<p className="text-lg">
  <span className="text-custom-text font-semibold">Email Address:</span>{" "}
  <span className="text-black">{lawyerData.emailAddress}</span>
</p>
<p className="text-lg">
  <span className="text-custom-text font-semibold">Phone Number:</span>{" "}
  <span className="text-black">{lawyerData.phoneNo}</span>
</p>
<p className="text-lg">
  <span className="text-custom-text font-semibold">Case Domain:</span>{" "}
  <span className="text-black">{lawyerData.caseDomain}</span>
</p>
<p className="text-lg">
  <span className="text-custom-text font-semibold">Location:</span>{" "}
  <span className="text-black">{lawyerData.location}</span>
</p>
<p className="text-lg">
  <span className="text-custom-text font-semibold">Year of Joining:</span>{" "}
  <span className="text-black">{lawyerData.yearOfJoining}</span>
</p>

          <div>
            <p className="text-lg text-custom-text font-medium">Bio: {lawyerData.bio}</p>
            <textarea
              className="border border-gray-300 p-2 mt-2"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <button
              className="bg-purple-900 text-white font-medium rounded-lg p-2 mt-2 ml-10"
              onClick={handleBioUpdate}
            >
              Update Bio
            </button>
          </div>
          <div>
            <p className="text-lg text-custom-text font-medium">Achievements:</p>
            <ul className="list-disc ml-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
            <input
              type="text"
              className="border border-gray-300 p-2 mt-2 "
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
            />
            <button
              className="bg-purple-900 text-white font-medium rounded-lg p-2 mt-2 ml-10"
              onClick={handleAchievementsUpdate}
            >
              Add Achievement
            </button>
          </div>
          <div>
            <p className="text-lg text-custom-text font-medium">Qualifications:</p>
            <ul className="list-disc ml-6">
              {qualifications.map((qualification, index) => (
                <li key={index} className="text-lg">
                  {qualification}
                </li>
              ))}
            </ul>
            <input
              type="text"
              className="border border-gray-300 p-2 mt-2"
              value={newQualification}
              onChange={(e) => setNewQualification(e.target.value)}
            />
            <button
              className="bg-purple-900 font-medium rounded-lg text-white p-2 mt-2 ml-10"
              onClick={handleQualificationsUpdate}
            >
              Add Qualification
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg">Loading lawyer information...</p>
      )}
    </div>
  );
};

export default LawyerInfo;
