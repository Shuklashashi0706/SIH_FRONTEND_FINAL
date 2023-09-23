import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeUser from "./components/User/HomeUser";
import UserLogin from "./components/User/UserLogin";
import UserSignUp from "./components/User/UserSignUp";
import HomeLawyer from "./components/Lawyer/HomeLawyer";
import LawyerLogin from "./components/Lawyer/LawyerLogin";
import LawyerInfo from "./components/Lawyer/LawyerInfo";
import HomeJudge from "./components/Judge/HomeJudge";
import JudgeSignUp from "./components/Judge/JudgeSignUp";
import JudgeLogin from "./components/Judge/JudgeLogin";
import LawyerSignUp from "./components/Lawyer/LawyerSignUp";
import LawyerByLocation from "./components/User/LawyerByLocation";
import LawyerByName from "./components/User/LawyerByName";
import AllLawyers from "./components/User/AllLawyers";
import LawyerRequest from "./components/Lawyer/LawyerRequest";
import AcceptedUser from "./components/Lawyer/AcceptedUser";
import HomeSuperAdmin from "./components/SuperAdmin/HomeSuperAdmin";
import AcceptedRequests from "./components/User/AcceptedRequests";
import SendNotificationByLawyer from "./components/Lawyer/SendNotificationByLawyer";
import AllRequest from "./components/User/AllRequests";
import CasesForTheDay from "./components/Judge/CasesForTheDay";
import CalendarForTheDay from "./components/Judge/CalendarForTheDay";
import CourtCaseReports from "./components/Judge/CourtCaseReports";
import DocVerification from "./components/SuperAdmin/DocVerification";
import Navbar from "./components/Navbar";
import DocumentUpload from "./components/User/DocumentUpload";


import "./index.css";
import LawyerByCaseDomain from "./components/User/LawyerByCaseDomain";
import SuperAdminLogin from "./components/SuperAdmin/SuperAdminLogin";
import RequestStatus from "./components/User/RequestStatus";

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isLawyerAuthenticated, setIsLawyerAuthenticated] = useState(false);
  const [isJudgeAuthenticated, setIsJudgeAuthenticated] = useState(false);
  const [isSuperAdminAuthenticated, setIsSuperAdminAuthenticated] = useState(false);

  return (
    <div>
      <Navbar
        isUserAuthenticated={isUserAuthenticated}
        isLawyerAuthenticated={isLawyerAuthenticated}
        isJudgeAuthenticated={isJudgeAuthenticated}
        setIsUserAuthenticated={setIsUserAuthenticated}
        setIsLawyerAuthenticated={setIsLawyerAuthenticated}
        setIsJudgeAuthenticated={setIsJudgeAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isUserAuthenticated={isUserAuthenticated}
              isLawyerAuthenticated={isLawyerAuthenticated}
              isJudgeAuthenticated={isJudgeAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
              setIsLawyerAuthenticated={setIsLawyerAuthenticated}
              setIsJudgeAuthenticated={setIsJudgeAuthenticated}
            />
          }
        />
        <Route path="/user" element={<UserSignUp />} />
        <Route path="/lawyer" element={<LawyerSignUp />} />
        <Route path="/judge" element={<JudgeSignUp />} />
        <Route path="/superadmin-home" element={<HomeSuperAdmin />} />
        <Route
          path="/SuperAdmin/login"
          element={
            <SuperAdminLogin
              isSuperAdminAuthenticated={isSuperAdminAuthenticated}
              setIsSuperAdminAuthenticated={setIsSuperAdminAuthenticated}
            />
          }
        />
        <Route
          path="/search-lawyer-by-location"
          element={
            <LawyerByLocation isUserAuthenticated={isUserAuthenticated} />
          }
        />
        <Route
          path="/search-lawyer-by-case"
          element={
            <LawyerByCaseDomain isUserAuthenticated={isUserAuthenticated} />
          }
        />
        <Route
          path="/document-upload"
          element={<DocumentUpload isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/search-lawyer-by-name"
          element={<LawyerByName isUserAuthenticated={isUserAuthenticated} />}
        />

        <Route
          path="/user/login"
          element={
            <UserLogin
              isUserAuthenticated={isUserAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
            />
          }
        />
        <Route
          path="/request-status"
          element={<RequestStatus isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/accepted-requests"
          element={
            <AcceptedRequests isUserAuthenticated={isUserAuthenticated} />
          }
        />
        <Route
          path="/all-requests"
          element={<AllRequest isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/home-user"
          element={<HomeUser isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/home-judge"
          element={<HomeJudge isJudgeAuthenticated={isJudgeAuthenticated} />}
        />
        <Route
          path="/all-lawyers"
          element={<AllLawyers isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/lawyer/login"
          element={
            <LawyerLogin
              isLawyerAuthenticated={isLawyerAuthenticated}
              setIsLawyerAuthenticated={setIsLawyerAuthenticated}
            />
          }
        />
        <Route
          path="/judge/login"
          element={
            <JudgeLogin
              isJudgeAuthenticated={isJudgeAuthenticated}
              setIsJudgeAuthenticated={setIsJudgeAuthenticated}
            />
          }
        />
        <Route path="/cases-for-the-day" element={<CasesForTheDay isJudgeAuthenticated={isJudgeAuthenticated} />} />
        <Route path="/calendar-for-the-day" element={<CalendarForTheDay isJudgeAuthenticated={isJudgeAuthenticated} />} />
        <Route path="/court-case-reports" element={<CourtCaseReports isJudgeAuthenticated={isJudgeAuthenticated} />} />
        <Route path="/doc-verification" element={<DocVerification isSuperAdminAuthenticated={isSuperAdminAuthenticated}/>}/>

        <Route
          path="/home-lawyer"
          element={<HomeLawyer isLawyerAuthenticated={isLawyerAuthenticated} />}
        />
        <Route
          path="/lawyer-info"
          element={<LawyerInfo isLawyerAuthenticated={isLawyerAuthenticated} />}
        />
        <Route
          path="/lawyer-requests"
          element={
            <LawyerRequest isLawyerAuthenticated={isLawyerAuthenticated} />
          }
        />
        <Route
          path="/lawyer-accepted-users"
          element={
            <AcceptedUser isLawyerAuthenticated={isLawyerAuthenticated} />
          }
        />
        <Route
          path="/lawyer-send-notification"
          element={
            <SendNotificationByLawyer
              isLawyerAuthenticated={isLawyerAuthenticated}
            />
          }
        />
        <Route path="/" element={<HomeJudge />} />

      </Routes>
    </div>
  );
}
