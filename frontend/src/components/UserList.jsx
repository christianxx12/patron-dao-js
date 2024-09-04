import React, { useEffect, useState } from "react";
import userService from "../services/userService";
import UserItem from "./UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userService.getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
