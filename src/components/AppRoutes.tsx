import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/log_in/log_in";
import SidePanel from "../pages/menu/sidepanel";
import Dashboard from "../pages/dashboard/dashboard";
import Household from "../pages/household/household";
import Account from "../pages/account/accountPage";
import PrintCertificate from "../pages/printCertificate/printCertificate";
import QRCodeAttendance from "../pages/qrCodeAttendance/qrCodeAttendance";
import SystemSettings from "../pages/systemSettings/systemSettings";
import LogOut from "../pages/logOut/logOut";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sidepanel" element={<SidePanel />} />\
        <Route path="/dashboard" element={<Dashboard />} />\
        <Route path="/household" element={<Household />} />\
        <Route path="/account" element={<Account />} />\
        <Route path="/printCertificate" element={<PrintCertificate />} />\
        <Route path="/qrCodeAttendance" element={<QRCodeAttendance />} />\
        <Route path="/systemSettings" element={<SystemSettings />} />\
        <Route path="/logOut" element={<LogOut />} />\
      </Routes>
    </Router>
  );
};

export default AppRoutes;
