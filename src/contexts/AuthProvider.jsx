import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    // call firebase function
    return new Promise((resolve) => {
      resolve({
        user: { email: "a@a.com" },
      });
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
