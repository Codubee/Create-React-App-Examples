import React from 'react';
import './App.css';
import JsonData from './JsonData/JsonData'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <JsonData/>
    </div>
  );
}

export default App;
