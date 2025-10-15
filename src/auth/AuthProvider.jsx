
// AuthProvider.js - Improved version
import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getStoredAuth, loginUser, logoutUser } from "./authService";


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, branch: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = getStoredAuth();
      setAuth(stored);
    } catch (error) {
      console.error("Error loading auth from storage:", error);
      setAuth({ token: null, branch: null });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (token, branch) => {
    try {
      const result = loginUser(token, branch);
      setAuth(result);
      return { success: true, data: result };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    try {
      const result = logoutUser();
      setAuth(result);
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return { success: false, error: error.message };
    }
  };

  const updateBranch = (branch) => {
    try {
      const newAuth = { ...auth, branch };
      localStorage.setItem("branch", branch);
      setAuth(newAuth);
      return { success: true };
    } catch (error) {
      console.error("Update branch error:", error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    auth,
    login,
    logout,
    updateBranch,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;