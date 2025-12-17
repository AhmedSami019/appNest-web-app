import React from "react";
import {AuthContext} from "./AuthContext";


const AuthProvider = ({ children }) => {
  const data = "kire bokachoda";

  const authData = {
    data,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
