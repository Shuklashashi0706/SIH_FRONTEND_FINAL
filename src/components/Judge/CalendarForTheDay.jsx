import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

function CalendarForTheDay() {
  const [isJudgeAuthenticated, setIsJudgeAuthenticated] = useState(false);
  const [conferences, setConferences] = useState([]);
  const [selectedConference, setSelectedConference] = useState(null);

  // Mock data for pre-trial conferences (replace with actual data)
  const mockConferences = [
    {
      id: 1,
      caseNumber: "CASE12345",
      caseTitle: "Personal Injury Lawsuit",
      caseDomain: "Personal Injury",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      location: "Courtroom 1",
    },
    {
      id: 2,
      caseNumber: "CASE67890",
      caseTitle: "Contract Dispute",
      caseDomain: "Business Law",
      startTime: "2:00 PM",
      endTime: "3:00 PM",
      location: "Courtroom 2",
    },
    // Add more mock conferences as needed
  ];

  useEffect(() => {
    // Replace this with actual API call to fetch conferences for the day
    // For now, using mock data
    setConferences(mockConferences);
  }, []);

  const openConferenceInfo = (conference) => {
    setSelectedConference(conference);
  };

  const handleJudgeLogin = () => {
    // Simulate judge login. In a real app, replace with actual authentication logic.
    setIsJudgeAuthenticated(true);
  };

  const handleJudgeLogout = () => {
    // Simulate judge logout.
    setIsJudgeAuthenticated(false);
    setSelectedConference(null); // Clear selected conference when logging out.
  };

  return (
    <div className="relative">
      <div className="relative">
        <h1 className="text-4xl text-custom-text font-bold mt-0 mx-auto mb-0">
          Pre-Trial Conferences for the Day
        </h1>

        {isJudgeAuthenticated ? (
          // Render the calendar if the judge is authenticated
          <div className="mt-12 mx-auto max-w-screen-xl">
            <button
              className="px-2 py-1 bg-red-500 text-white rounded-md mb-4"
              onClick={handleJudgeLogout}
            >
              Logout as Judge
            </button>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="py-2 px-4">Case Number</th>
                  <th className="py-2 px-4">Case Title</th>
                  <th className="py-2 px-4">Domain</th>
                  <th className="py-2 px-4">Start Time</th>
                  <th className="py-2 px-4">End Time</th>
                  <th className="py-2 px-4">Location</th>
                </tr>
              </thead>
              <tbody>
                {conferences.map((conference) => (
                  <tr
                    key={conference.id}
                    className="bg-white cursor-pointer"
                    onClick={() => openConferenceInfo(conference)}
                  >
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.caseNumber}
                    </td>
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.caseTitle}
                    </td>
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.caseDomain}
                    </td>
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.startTime}
                    </td>
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.endTime}
                    </td>
                    <td className="py-2 px-4 text-custom-text font-semibold">
                      {conference.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Display a message or login button if the judge is not authenticated
          <div className="mt-4">
            <p className="text-red-500">
              Please login as a judge to view the calendar.
            </p>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-md mt-2"
              onClick={handleJudgeLogin}
            >
              Login as Judge
            </button>
          </div>
        )}

        {selectedConference && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-custom-purple rounded-lg shadow-lg p-4 max-w-3xl">
              <h2 className="text-xl font-bold text-custom-text mb-2">
                Conference Information
              </h2>
              <div className="flex space-x-4">
                <div>
                  <p>
                    Case Number:{" "}
                    <strong>{selectedConference.caseNumber}</strong>
                  </p>
                  <p>
                    Case Title:{" "}
                    <strong>{selectedConference.caseTitle}</strong>
                  </p>
                  <p>
                    Domain:{" "}
                    <strong>{selectedConference.caseDomain}</strong>
                  </p>
                  <p>
                    Start Time:{" "}
                    <strong>{selectedConference.startTime}</strong>
                  </p>
                  <p>
                    End Time:{" "}
                    <strong>{selectedConference.endTime}</strong>
                  </p>
                  <p>
                    Location:{" "}
                    <strong>{selectedConference.location}</strong>
                  </p>
                </div>
              </div>
              <button
                className="mt-4 px-2 py-1 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
                onClick={() => setSelectedConference(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarForTheDay;
