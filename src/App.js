import React from 'react';
import './App.css';
import PersonFunctional from './components/PersonFunctional'
import PersonalClass from './components/PersonClass'
function App() {
  return (
    <div className="App">
      <PersonFunctional name="John"/>
      <PersonalClass name="Sally"/>
    </div>
  );
}

export default App;
