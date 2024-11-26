import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.auth);
  return auth ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
