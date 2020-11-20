import React from "react";
import "./style.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Redirect from="/" to="/posts" />
    </BrowserRouter>
  );
}
