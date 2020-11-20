import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div classsName="menu">
      <NavLink to="/" activeClassName="new">
        Home
      </NavLink>{" "}
      &nbsp;
      <NavLink to="/about">About</NavLink> &nbsp;
      <NavLink to="/posts">Posts1</NavLink>
    </div>
  );
};

export default Menu;
