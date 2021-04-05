import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Admin, Client } from "./containers/"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/client" exact component={Client} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
