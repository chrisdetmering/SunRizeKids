import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import Strips from '../Strips/Strips';
import Footer from '../../containers/Footer/Footer';


const layout = () => { 
  return( 
    <div className={classes}>
      <Navbar />
      <Landing />
      <Strips />
      <Footer />
   </div>
  )
}

export default layout;