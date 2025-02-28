import React, { createContext, useReducer, useContext } from "react";

// Initial state for the users list
const initialState = {
  users: [],
};

// Action types
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPDATE_USER";

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload], // Add a new user
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload), // Remove a user by ID
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user // Update user details
        ),
      };
    default:
      return state;
  }
}

// Create context
const UserContext = createContext();

// Create a custom hook to use the context easily
export function useUsers() {
  return useContext(UserContext);
}

// Provider component that wraps the app and provides the context
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Actions to interact with the state
  const addUser = (user) => dispatch({ type: ADD_USER, payload: user });
  const removeUser = (id) => dispatch({ type: REMOVE_USER, payload: id });
  const updateUser = (user) => dispatch({ type: UPDATE_USER, payload: user });

  return (
    <UserContext.Provider value={{ ...state, addUser, removeUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
