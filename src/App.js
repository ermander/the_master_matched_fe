import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login/Login'
import OddsMatcher from "./Components/OddsMatcher/OddsMatcher"
import Dutcher from "./Components/Dutcher/Dutcher"
import BestOdds from "./Components/BestOdds/BestOdds"
import Trimatcher from "./Components/Trimatcher/Trimatcher"
import InCorso from "./Components/ProfitTracker/InCorso"
import Archiviate from "./Components/ProfitTracker/Archiviate"
import PuntaPunta from "./Components/Calcolatori/PuntaPunta"
import PuntaBanca from "./Components/Calcolatori/PuntaBanca"
import MultiTool from "./Components/Calcolatori/MultiTool" 
import Casino from "./Components/Calcolatori/Casino"
import Converter from "./Components/Calcolatori/Converter"
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

          {/* ODDS ROUTE */}
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

          {/* CALCOLATORI ROUTE*/}
          <Route path="/punta-banca" exact>
            <PuntaBanca />
          </Route>
          <Route path="/punta-punta" exact>
            <PuntaPunta />
          </Route>
          <Route path="multi-tool" exact>
            <MultiTool />
          </Route>
          <Route path="/casino" exact>
            <Casino />
          </Route>
          <Route path="/converter" exact>
            <Converter />
          </Route>

          {/* ACCOUNT ROUTES*/}
          <Route path="/profit_tracker/in-progress" exact>
            <InCorso />
          </Route>
          <Route patch="/profit_tracker/archived" exact>
            <Archiviate />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
