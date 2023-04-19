import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../configs/firebase.config";
import useNav from "../hooks/useNav";

const Nav = () => {
  const user = null;

  const { navbar, navbarLogo } = useNav();

  return (
    <nav
      className={`border-gray-200 px-2 sm:px-8 py-2.5 fixed w-full top-0 z-50 transition-all ${
        navbar && "bg-white shadow-lg"
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          {navbarLogo}
        </a>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0 dark:"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/generator"
                className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Generator
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Docs
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={() => signOut(auth)}>Logout</button>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              )}
            </li>
            <li>{user?.email}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
