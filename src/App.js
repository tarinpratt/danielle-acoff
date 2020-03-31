import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import About from './About/About';
import './App.css';


class App extends Component {
  render() {
    return (
      <main className='App'>
        <Route exact path='/' component={Landing}/>
        <Route path='/about' component={About} />
      </main>
    )
  }
}

export default App;