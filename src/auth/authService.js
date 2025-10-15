// authService.js - Improved version
export const loginUser = (token, branch = null) => {
  try {
    localStorage.setItem("token", token);
    if (branch) {
      localStorage.setItem("branch", branch);
    }
    return { token, branch };
  } catch (error) {
    throw new Error("Failed to store authentication data", error);
  }
};

export const logoutUser = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("branch");
    return { token: null, branch: null };
  } catch (error) {
    throw new Error("Failed to clear authentication data", error);
  }
};

export const getStoredAuth = () => {
  try {
    const token = localStorage.getItem("token");
    const branch = localStorage.getItem("branch");
    return token ? { token, branch } : { token: null, branch: null };
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return { token: null, branch: null };
  }
};