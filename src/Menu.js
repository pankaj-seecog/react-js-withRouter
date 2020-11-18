import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/about">About</Link> &nbsp;
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Menu;
