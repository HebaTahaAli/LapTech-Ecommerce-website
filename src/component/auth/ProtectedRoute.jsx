import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthProvider);

  if (!user) {
    toast.error("Please login first");
    return <Navigate to="/login" replace />;
  }

  return children;
}