import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "green" : "black",
    };
  };
  return (
    <nav>
      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="about" className="mx-3" style={navLinkStyle}>
        About
      </NavLink>
      <NavLink to="products" style={navLinkStyle}>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
