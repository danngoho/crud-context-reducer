import React, { useState } from "react";
import { useUsers } from "./UserContext";

function UserList() {
  const { users, removeUser, updateUser } = useUsers(); // Get users and actions from context
  const [editId, setEditId] = useState(null); // State for managing the user being edited
  const [editName, setEditName] = useState(""); // State for the new name during editing

  const handleEdit = (user) => {
    setEditId(user.id); // Set the user ID being edited
    setEditName(user.name); // Set the name to edit
  };

  const handleUpdate = () => {
    updateUser({ id: editId, name: editName }); // Dispatch the update action
    setEditId(null); // Reset the edit state
    setEditName(""); // Clear the input
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editId === user.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)} // Update the name during edit
                />
                <button onClick={handleUpdate}>Update</button>
              </>
            ) : (
              <>
                {user.name}
                <button onClick={() => removeUser(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
