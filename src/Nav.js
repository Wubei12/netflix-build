import React, { useEffect, useState } from "react";
import "./Nav.css";
import imgUrl1 from "./assets/logo.png";
import imgUrl2 from "./assets/avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={imgUrl1} alt="logo" />
        <img className="nav__avatar" src={imgUrl2} alt="avatar" />
      </div>
    </div>
  );
}

export default Nav;
