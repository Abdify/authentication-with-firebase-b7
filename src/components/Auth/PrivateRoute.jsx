import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
