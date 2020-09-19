import React from 'react';
// Style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import OddsMatcher from "./Components/OddsMatcher"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact >
            <Login />
            </Route>
          <Route path="/oddsmatcher" exact >
            <OddsMatcher />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
