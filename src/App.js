import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login/Login'
import OddsMatcher from "./Components/OddsMatcher/OddsMatcher"
import Dutcher from "./Components/Dutcher/Dutcher"
import BestOdds from "./Components/BestOdds/BestOdds"
import Trimatcher from "./Components/Trimatcher/Trimatcher"
import ProfitTracker from "./Components/ProfitTracker/ProfitTracker"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          {/* LOGIN ROUTE */}
          <Route path="/" exact >
            <Login />
          </Route>

          {/* INSTRUMENTS ROUTES */}
          <Route path="/oddsmatcher" exact >
            <OddsMatcher />
          </Route>
          <Route path="/dutcher" exact >
            <Dutcher />
          </Route>
          <Route path="/trimatcher" exact>
            <Trimatcher />
          </Route>
          <Route path="/bestodds" exact>
            <BestOdds />
          </Route>

          {/* ACCOUNT ROUTES*/}
          <Route path="/profit_tracker" exact>
            <ProfitTracker />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
