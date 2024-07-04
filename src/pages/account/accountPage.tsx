import React from "react";
import UserTable from "../../components/UserTable";

const Account: React.FC = () => {
  return (
    <div className="account-page">
      <h1>User Accounts</h1>
      <UserTable />
    </div>
  );
};

export default Account;
