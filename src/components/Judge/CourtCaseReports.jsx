import React, { useState, useEffect } from "react";

function CourtCaseReports() {
  const [caseReports, setCaseReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  // Mock data for case reports (replace with actual data)
  const mockCaseReports = [
    {
      caseNumber: "CASE12345",
      caseTitle: "Personal Injury Lawsuit",
      caseDomain: "Personal Injury",
      status: "Closed",
      report: "This is a summary of the case outcome.",
    },
    {
      caseNumber: "CASE67890",
      caseTitle: "Contract Dispute",
      caseDomain: "Business Law",
      status: "Open",
      report: "This is an ongoing case report.",
    },
    // Add more mock case reports as needed
  ];

  useEffect(() => {
    // Replace this with actual API call to fetch case reports
    // For now, using mock data
    setCaseReports(mockCaseReports);
  }, []);

  const openReport = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="relative">
      <div className="relative">
        <h1 className="text-4xl text-custom-text font-bold mt-0 mx-auto mb-0">
          Court Case Reports
        </h1>

        <div className="mt-12 mx-auto max-w-screen-xl">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-purple-900 text-white">
                <th className="py-2 px-4">Case Number</th>
                <th className="py-2 px-4">Case Title</th>
                <th className="py-2 px-4">Domain</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {caseReports.map((report) => (
                <tr key={report.caseNumber} className="bg-white">
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {report.caseNumber}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {report.caseTitle}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {report.caseDomain}
                  </td>
                  <td className="py-2 px-4 text-custom-text font-semibold">
                    {report.status}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="px-2 py-1 bg-bpurple text-custom-text font-semibold rounded-lg hover:bg-purple-100"
                      onClick={() => openReport(report)}
                    >
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedReport && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-custom-purple rounded-lg shadow-lg p-4 max-w-3xl">
              <h2 className="text-xl font-bold text-custom-text mb-2">
                Case Report
              </h2>
              <div className="flex space-x-4">
                <div>
                  <p>
                    Case Number:{" "}
                    <strong>{selectedReport.caseNumber}</strong>
                  </p>
                  <p>
                    Case Title:{" "}
                    <strong>{selectedReport.caseTitle}</strong>
                  </p>
                  <p>
                    Domain: <strong>{selectedReport.caseDomain}</strong>
                  </p>
                  <p>
                    Status: <strong>{selectedReport.status}</strong>
                  </p>
                  <p>
                    Report: <strong>{selectedReport.report}</strong>
                  </p>
                </div>
              </div>
              <button
                className="mt-4 px-2 py-1 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
                onClick={() => setSelectedReport(null)}
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

export default CourtCaseReports;
