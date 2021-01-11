import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/** Search box */}
      <input type="text" className="header_searchInput" />
      {/** 3 Links */}
      {/** Basket icon w/ updated number */}
    </nav>
  );
}

export default Header;
