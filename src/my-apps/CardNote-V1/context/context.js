import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AuthContext);
}
