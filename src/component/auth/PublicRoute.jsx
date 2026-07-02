import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

export default function PublicRoute({ children }) {

    const { user } = useContext(AuthProvider);

    return user ? <Navigate to="/" replace /> : children;

}