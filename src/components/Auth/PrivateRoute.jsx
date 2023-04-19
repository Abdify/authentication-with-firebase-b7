import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  console.log(location);

  if (!user) {
    return <Navigate to="/login" state={location} />;
  }

  return children;
};

export default PrivateRoute;
