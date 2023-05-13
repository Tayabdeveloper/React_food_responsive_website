import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="button">Home</a>
          </li>
          <li>
            <a href="button">Menu</a>
          </li>
          <li>
            <a href="button">Shop</a>
          </li>
          <li>
            <a href="button">News</a>
          </li>
          <li>
            <a href="button">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
