import React from 'react';
import classes from './Navbar.module.css';
import phone from '../../assets/phone.png';
import Button from '../Button/Button';

const navbar = () => { 
  const href = "https://app.wodifyrise.com/Event/Event.aspx?u=sunrizekidsfitness"


  return ( 
    <div className={classes.Navbar}>
      <a href="tel:+1-404-441-5736" className={classes.Call}>
        <img src={phone} alt='A phone'/>
      </a>
      <Button
        href={href}
        buttonType={'SignUp'} />
    </div>
  )
}

export default navbar;