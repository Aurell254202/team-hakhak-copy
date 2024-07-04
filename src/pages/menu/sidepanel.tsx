import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/sidepanel.css";
import logoImage from "../../assets/logopic.png";

const SidePanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidepanel-container">
        <div className="button-container">
          <img src={logoImage} alt="Logo" className="custom-form-image" />
          <h4 className="location">Poblacion 2</h4>
          <h4 className="location">Tagbilaran City</h4>
          <h2>MENU</h2>

          <button
            className="dashboardName"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="householdName"
            onClick={() => navigate("/household")}
          >
            Household
          </button>

          <button className="accountName" onClick={() => navigate("/account")}>
            Account
          </button>

          <button
            className="printCertificateName"
            onClick={() => navigate("/printCertificate")}
          >
            Print Certificate
          </button>

          <button
            className="qrCodeName"
            onClick={() => navigate("/qrCodeAttendance")}
          >
            QR Code Attendance
          </button>

          <button
            className="systemSettingsName"
            onClick={() => navigate("/systemSettings")}
          >
            System Settings
          </button>

          <button className="logOutName" onClick={() => navigate("/logOut")}>
            Log Out
          </button>
        </div>
      </div>

      <div className="button-container">
        <h1>Welcome to dashboard</h1>
      </div>
    </div>
  );
};

export default SidePanel;
