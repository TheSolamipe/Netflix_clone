import React, { useEffect, useState } from "react";
import "./../styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="./../Netflix_Logo_CMYK.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="./../icon.png" /*"https://pbs.twimg.com/profile_images/12401199904155"*/
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
