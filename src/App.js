import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import AvengersList from './components/AvengersList';
import Home from './components/Home';
import ItemList from './components/ItemList';
// import Avenger from './components/Avenger';
import SingleAvenger from './components/SingleAvenger';

import { avengers } from './avengersData';

import { Route } from 'react-router-dom';

function App() {
  // console.log(avengers)
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AvengersList'>AvengersList</Link>
      </nav>

      <Route exact path='/' component={Home} />

      <Route path='/ItemList' component={ItemList} />
      <Route 
        path='/SingleAvenger/:id' 
        render={props => <SingleAvenger {...props} 
        avenger={avengers}
      /> }/>

      <Route 
        path='/AvengersList' 
        render={props => <AvengersList {...props} 
        avenger={avengers}
      />}/>
      
      {/*
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      */}
    </div>
  );
}

export default App;
