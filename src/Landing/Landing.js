import React, { Component } from 'react';
import Nav from '..//Nav/Nav';
import './Landing.css';

class Landing extends Component {
    render() {
      return (
           <header className="header" role="banner"> 
           <Nav />  
                  <section className="text-box">
                      <h1>Danielle Acoff</h1>
                      <h2>Yogi, Dancer, Model</h2>
                  </section>
              </header>
      )
    }
  }
  
  export default Landing;