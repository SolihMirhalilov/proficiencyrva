// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  console.log("Рабочий токин??" , token)
  return token ? children : <Navigate to="/myAdmin" replace />;
}
