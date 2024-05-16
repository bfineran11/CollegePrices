import { useState } from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import Tool from "./tool";
import Home from "./Home";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/tool" component={Tool}></Route>
    </Switch>
  );
}
