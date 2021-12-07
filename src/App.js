import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, idx) => (
          <Route path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </Router>
  );
}
export default App;
