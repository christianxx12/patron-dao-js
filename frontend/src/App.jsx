import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </div>
  );
}

export default App;
