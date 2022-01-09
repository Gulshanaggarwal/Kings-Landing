import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import PrivacyPolicy from "./Components/PrivacyPolicy"
import Dashboard from "./Components/ProtectedRoutes/Dashboard/dashboard";
import Profile from "./Components/ProtectedRoutes/Profile/profile";
import LocalStateProvider from "./Store/localStateProvider";
import Notification from "./Components/Notifications";
import Loader from "./Components/Loading";

function App() {

  // Welcome to kings Landing.
  return (
    <LocalStateProvider>
      <div className="font-Roboto w-full mx-auto xl:w-2/3 ">
        <Router>
          <Routes>
            <Route path="/" caseSensitive element={<HomePage />} />
            <Route path="/dashboard" caseSensitive element={<Dashboard />} />
            <Route path="/profile" caseSensitive element={<Profile />} />
            <Route path="/privacy-policy" caseSensitive element={<PrivacyPolicy />} />
            <Route path="*" caseSensitive element={<NotFound />} />
          </Routes>
        </Router>
        <Loader />
        <Notification />
      </div>
    </LocalStateProvider>
  );
}

export default App;
