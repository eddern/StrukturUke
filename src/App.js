import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup/" component={SignUp} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
