import React, { useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const UserState = () => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    console.log(res);
  };

  const getProfile = async (id) => {
    const res = await axios.get("https://reqres.in/api/users" + id);
    console.log(res);
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {}
    </UserContext.Provider>
  );
};

export default UserState;
