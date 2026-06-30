import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);

 
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

    // تسجيل الدخول مباشرة بعد إنشاء الحساب
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

  return (
    <AuthProvider.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
}