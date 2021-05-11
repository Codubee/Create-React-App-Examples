import React from 'react';
import './App.css';

// Import the API component that has the API request
import Api from './Api/Api'

// This import handles the navigation of the application
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './Landing/Landing';

function App() {
  return (
    
    // The router and switch allow us to navigate to different pages
    <Router>
    <Switch>

      {/* The Landing component will be shown at localhost:3000/ */}
      <Route path="/" exact component={Landing}/>

      {/* The API component will be shown at localhost:3000/newPath */}
      <Route path="/newPath" component={Api} />
    </Switch>
  </Router>
  );
}

export default App;
