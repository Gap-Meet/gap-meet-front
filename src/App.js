import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StartPage from "./pages/StartPage";
import ChangePWX from "./pages/ChangePWX";
import TimeSelectCheck from "./pages/TimeSelectCheck";
import GroupPageParticipant from "./pages/GroupPageParticipant";
import GroupPageMaster from "./pages/GroupPageMaster";
import ExistBlank from "./pages/ExistBlank";
import Join from "./pages/Join";
import RecruitNewGroup from "./pages/RecruitNewGroup";
import AddSchedule from "./pages/AddSchedule";
import Schedule from "./pages/Schedule";
import LoginPage from "./pages/LoginPage";
import React, { useEffect, useState } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/change-pw-x":
        title = "";
        metaDescription = "";
        break;
      case "/time-select-check":
        title = "";
        metaDescription = "";
        break;
      case "/group-page-participant":
        title = "";
        metaDescription = "";
        break;
      case "/group-page-master":
        title = "";
        metaDescription = "";
        break;
      case "/exist-blank":
        title = "";
        metaDescription = "";
        break;
      case "/join":
        title = "";
        metaDescription = "";
        break;
      case "/recruit-new-group":
        title = "";
        metaDescription = "";
        break;
      case "/add-schedule":
        title = "";
        metaDescription = "";
        break;
      case "/schedule":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/change-pw-x" element={<ChangePWX />} />
      <Route path="/time-select-check" element={<TimeSelectCheck />} />
      <Route
        path="/group-page-participant"
        element={<GroupPageParticipant />}
      />
      <Route path="/group-page-master" element={<GroupPageMaster />} />
      <Route path="/exist-blank" element={<ExistBlank />} />
      <Route path="/join" element={<Join />} />
      <Route path="/recruit-new-group" element={<RecruitNewGroup />} />
      <Route path="/add-schedule" element={<AddSchedule />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
