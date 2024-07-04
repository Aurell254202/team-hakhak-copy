// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidePanel from "./pages/menu/sidepanel";
import AccountPage from "./pages/account/accountPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <SidePanel />
        <Routes>
          <Route path="/account" element={<AccountPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
