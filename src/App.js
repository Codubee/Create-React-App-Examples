import React from 'react';
import './App.css';
import ClassComponent from './ClassComponent/ClassComponent'
import FunctionalComponent from './FunctionalComponent/FunctionalComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent />
        <FunctionalComponent />
      </header>
    </div>
  );
}

export default App;
