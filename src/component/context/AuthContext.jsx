import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
 
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  // ================= Login =================

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));

    return {
      success: true,
      message: "Login Successfully",
    };
  };

  // ================= Register =================

  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some(
      (item) => item.email === newUser.email
    );

    if (emailExists) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    
    setUser(newUser);
    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    return {
      success: true,
      message: "Account Created Successfully",
    };
  };

  // ================= Logout =================

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");

    return {
      success: true,
      message: "Logout Successfully",
    };
  };
const updateProfile = (data) => {

  const updatedUser = {
    ...user,
    ...data,
  };

  setUser(updatedUser);

  localStorage.setItem(
    "user",
    JSON.stringify(updatedUser)
  );

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((item) =>
    item.email === updatedUser.email
      ? updatedUser
      : item
  );

  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

};
  return (
    <AuthProvider.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isAuthenticated,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
}