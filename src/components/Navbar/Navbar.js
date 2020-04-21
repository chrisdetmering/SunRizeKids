import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';

const navbar = () => { 
  return ( 
    <div className={classes.Navbar}>
      <img src={logo} alt="Sunrize Logo"/>
    </div>
  )
}

export default navbar;