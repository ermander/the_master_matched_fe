import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Login from './Components/Login/Login'
import OddsMatcher from "./Components/OddsMatcher/OddsMatcher"
import Dutcher from "./Components/Dutcher/Dutcher"
import BestOdds from "./Components/BestOdds/BestOdds"
import Trimatcher from "./Components/Trimatcher/Trimatcher"
import InCorso from "./Components/ProfitTracker/InProgressGames/InCorso"
import Archiviate from "./Components/ProfitTracker/ArchievedGames/Archiviate"
import PuntaPunta from "./Components/Calcolatori/PuntaPunta"
import PuntaBanca from "./Components/Calcolatori/PuntaBanca"
import MultiTool from "./Components/Calcolatori/MultiTool" 
import Casino from "./Components/Calcolatori/Casino"
import Converter from "./Components/Calcolatori/Converter"
import BetDetails from "./Components/ProfitTracker/InProgressGames/BetDetails"
import CasinoDetails from "./Components/ProfitTracker/CasinoGames/CasinoDetails"
import Utenti from "./Components/ProfitTracker/Users/Utenti"
import PaymentMethods from "./Components/ProfitTracker/PaymentMethods/PaymentMethods"
import Bookmakers from "./Components/ProfitTracker/bookmakers/Bookmakers"

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
          <Route path="/multi-tool" exact>
            <MultiTool />
          </Route>
          <Route path="/casino" exact>
            <Casino />
          </Route>
          <Route path="/converter" exact>
            <Converter />
          </Route>

          {/* ACCOUNT ROUTES */}
          
          <Route path="/profit_tracker/bet_details/:id">
            <BetDetails />
          </Route>
          
          <Route path="/profit_tracker/in-progress" exact>
            <InCorso />
          </Route>
          <Route path="/profit_tracker/archived" exact>
            <Archiviate />
          </Route>
          <Route path="/profit_tracker/casino" exact>
            <CasinoDetails />
          </Route>
          <Route path="/profit_tracker/users" exact>
            <Utenti />
          </Route>
          <Route path="/profit_tracker/payments" exact>
            <PaymentMethods />
          </Route>
          <Route path="/profit_tracker/bookmakers" exact>
            <Bookmakers />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
