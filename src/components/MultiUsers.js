import React from "react";

const MultiUsers = ({ users }) => {
  if (users.length === 0) {
    return null;
  }
  return (
    <div
      className="multi-users"
      title={users.join(", ")}
    >
      <span>{users[0]}</span>
      {users.length > 1 && <span className="count">+{users.length - 1}</span>}
    </div>
  );
};

export default MultiUsers;
