import React from "react";
import "./style.css";
import Menu from "./Menu";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}
