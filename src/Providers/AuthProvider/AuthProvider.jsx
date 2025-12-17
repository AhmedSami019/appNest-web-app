import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase/firebase_init_js";

const AuthProvider = ({ children }) => {
  // all states
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  //   function for create user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   signIn user function
const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  console.log(user);

  const authData = {
    createNewUser,
    loginUser,
    user,
    setUser
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
