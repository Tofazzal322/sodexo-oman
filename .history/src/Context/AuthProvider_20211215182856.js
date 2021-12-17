import React, { createContext } from "react";
// import useFirebase from "../hook/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContext = useFirebas();
  return (
      <AuthContext.Provider value={allContext}>
          {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
