import React from 'react';
import logo from './logo.svg';
import './App.css';

import AvengersList from './components/AvengersList';
import Home from './components/Home';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <AvengersList />
          
      </header>

      <Route path='/' component={Home} />

    </div>
  );
}

export default App;
