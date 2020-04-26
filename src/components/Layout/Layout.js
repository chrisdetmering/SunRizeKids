import React from 'react';
import classes from './Layout.module.css';
import Landing from '../Landing/Landing';
import Strips from '../Strips/Strips';
import Footer from '../../containers/Footer/Footer';
import Navbar from '../Navbar/Navbar';


const layout = () => { 
  return( 
    <div className={classes}>
      <Landing />
      <Strips />
      <Footer />
      <Navbar />
   </div>
  )
}

export default layout;