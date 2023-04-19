import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
