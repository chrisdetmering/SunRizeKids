import React from 'react';
import classes from './Layout.module.css';
import Landing from '../Landing/Landing';
import Strips from '../Strips/Strips';
import Footer from '../../containers/Footer/Footer';


const layout = () => { 
  return( 
    <div className={classes}>
      <Landing />
      <Strips />
      <Footer />
   </div>
  )
}

export default layout;