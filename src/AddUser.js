import React, { useState } from "react";
import { useUsers } from "./UserContext";

function AddUser() {
  const { addUser } = useUsers(); // Get addUser function from context
  const [name, setName] = useState(""); // Local state for the user's name

  const handleAdd = () => {
    const newUser = { id: Date.now(), name }; // Create a new user object with a unique ID
    addUser(newUser); // Dispatch the action to add the new user
    setName(""); // Clear the input after adding
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update local state with input value
        placeholder="Enter user name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddUser;
