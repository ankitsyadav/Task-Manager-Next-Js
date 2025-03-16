"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";

import { currentUserService } from "@/app/services/signInService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const currentUser = await currentUserService();

        setUser(currentUser);
      } catch (error) {
        // console.error(error);

        setUser(undefined);
      }
    }
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
