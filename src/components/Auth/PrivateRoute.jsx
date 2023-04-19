import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = { email: "a" };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
