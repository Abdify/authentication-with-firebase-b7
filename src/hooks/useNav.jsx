import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const useNav = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(logo);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  // logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 300) {
      setNavbarLogo(
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:">
          RANCO
        </span>
      );
    } else {
      setNavbarLogo(<img className="h-10" src={logo} alt="" />);
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo);
  }, []);

  return { navbar, navbarLogo };
};

export default useNav;
