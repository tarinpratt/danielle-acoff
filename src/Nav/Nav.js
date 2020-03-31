import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
  render() {
    return (
        <nav role="navigation">
        {/* <a href="#">
        <FontAwesomeIcon icon={fafa-spa} size="1x"/>
        <i className="fa fa-spa fa-3x"></i></a>  */}
        <ul className="nav">
        <Link to='/about' className='about'>About</Link> 
        <Link to='/photos' className='photos'>Photos</Link> 
        <Link to='/videos' className='videos'>Videos</Link> 
        <Link to='/shop' className='shop'>Shop</Link>    
        </ul>
        </nav>
    )
  }
}

export default Nav;

