// UserTable.tsx
import React from "react";
import "../style/UserTable.css";

const UserTable: React.FC = () => {
  // Sample data for users
  const users = [
    { username: "user1", firstname: "John", lastname: "Doe", role: "Admin" },
    { username: "user2", firstname: "Jane", lastname: "Smith", role: "User" },
    {
      username: "user3",
      firstname: "Mike",
      lastname: "Johnson",
      role: "Moderator",
    },
  ];

  return (
    <div className="content-container">
      <h2>User Information</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-box">{user.username}</div>
              </td>
              <td>
                <div className="user-box">{user.firstname}</div>
              </td>
              <td>
                <div className="user-box">{user.lastname}</div>
              </td>
              <td>
                <div className="user-box">{user.role}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
