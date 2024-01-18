import React from "react";
import LOGO from "../../public/images/beats-logo.png";

const Header = () => {
  return (
    <header>
      <div className="container header-section">
        <img
          className="logo"
          src={LOGO}
        />
        <nav>
          <a href="#">Portfolio</a>
          <a href="#">Inbox</a>
          <a
            className="selected"
            href="#"
          >
            My Tasks
          </a>
          <a href="#">Help</a>
          <a href="#">Account</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
