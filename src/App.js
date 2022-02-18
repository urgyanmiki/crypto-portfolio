import './App.css';
import { CoinList, CoinPage, Portfolio } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import React from "react";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={() => <CoinList/>}/>
                <Route exact path="/portfolio" component={() => <Portfolio/>}/>
                <Route exact path="/coin/:id" component={() => <CoinPage/>}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
