import React from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();

  const path = location.state.pathname;
  return <div>Register here</div>;
};

export default Register;
