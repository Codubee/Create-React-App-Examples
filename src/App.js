import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api/Api'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <Switch>
      <Route path="/" exact component={Temp}/>
      <Route path="/newPath" component={Api} />
    </Switch>
  </Router>
  );
}

function Temp(){
  return(
    <h1 className="App">Hello world!</h1>
  )
}

export default App;
