import React, { useState } from "react";
import { Link } from "react-router-dom";

function CasesForTheDay() {
  // Mock data for cases
  const mockCases = [
    {
      caseNumber: "CASE12345",
      caseTitle: "Personal Injury Lawsuit",
      caseDomain: "Personal Injury",
      timing: "10:00 AM - 12:00 PM",
    },
    {
      caseNumber: "CASE67890",
      caseTitle: "Contract Dispute",
      caseDomain: "Business Law",
      timing: "2:00 PM - 4:00 PM",
    },
    // Add more mock cases as needed
  ];

  const [cases] = useState(mockCases); // Use cases state to store the mock data

  return (
    <div className="relative">
      <div className="relative">
        <h1 className="text-4xl text-custom-text font-bold mt-0 mx-auto mb-0">
          Cases for the Day
        </h1>
        <div className="mt-12 mx-auto max-w-screen-xl">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-purple-900 text-white">
                <th className="py-2 px-4">Case Number</th>
                <th className="py-2 px-4">Case Title</th>
                <th className="py-2 px-4">Domain</th>
                <th className="py-2 px-4">Timing</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((selectedCase) => (
                <tr key={selectedCase.caseNumber} className="bg-white">
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {selectedCase.caseNumber}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {selectedCase.caseTitle}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {selectedCase.caseDomain}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {selectedCase.timing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CasesForTheDay;
