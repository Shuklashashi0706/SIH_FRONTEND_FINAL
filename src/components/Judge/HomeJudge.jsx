import React from "react";
import { Link } from "react-router-dom";

function HomeJudge() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-12 rounded border border-purple shadow-md shadow-lg p-12 space-y-6">
          <h1 className="text-4xl font-bold text-center text-custom-text mb-6">
            Welcome, Judge!
          </h1>
          <div className="space-y-4">
            <Link to="/cases-for-the-day">
              <button className="px-4 py-2 bg-custom-purple font-semibold text-custom-text rounded-lg hover:bg-purple-100 mr-3">
                Show All Cases for the Day
              </button>
            </Link>
            <Link to="/calendar-for-the-day">
  <button className="px-4 py-2 bg-custom-purple font-semibold text-custom-text rounded-lg hover:bg-purple-100 mr-3">
    Show my Calendar
  </button>
</Link>

            <Link to="/court-case-reports">
              <button className="px-4 py-2 bg-custom-purple font-semibold text-custom-text rounded-lg hover-bg-purple-100">
                Court Case Report
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeJudge;
