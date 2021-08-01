import React, { useEffect, useContext } from "react";
import UserContext from "../Context/User/UserContext";

const UserList = () => {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  return <div>User List</div>;
};

export default UserList;
