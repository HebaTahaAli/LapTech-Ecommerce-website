import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import toast from "react-hot-toast";
import Loading from "../../pages/productDetails/Loading";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return <Loading/>;
  }

  if (!user) {
    toast.error("Please login first");
    return <Navigate to="/login" replace />;
  }

  return children;
}