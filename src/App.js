import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

import AvengersList from './components/AvengersList';
import Home from './components/Home';
// import Avenger from './components/Avenger';
import SingleAvenger from './components/SingleAvenger';

import { avengers } from './avengersData';

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avengers: []
    };
  }
  // console.log(avengers)

  componentDidMount() {
    this.setState({ avengers: avengers });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/' exact>Home</NavLink>
          <NavLink to='/AvengersList'>AvengersList</NavLink>
        </nav>

        <Route exact path='/' component={Home} />

        <Route 
          path='/SingleAvenger/:id' 
          render={props => <SingleAvenger {...props} 
          avenger={this.state.avengers}
        /> }/>

        <Route 
          path='/AvengersList' 
          render={props => <AvengersList {...props} 
          avenger={this.state.avengers}
        />}/>

        {/*
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        */}
      </div>
    );
  }
  
}

export default App;
