import React from 'react'; 
import classes from './SubHeader.module.css';

const subHeader = () => { 

  return( 
    <div className={classes.SubHeader}>
      <h2>Inspired</h2>
      <p>Goals, challenges, and new content every day keep kids engaged and motivated</p>
      <h2>Active</h2>
      <p>Get kids off screens with daily workouts and outdoor challenges</p>
      <h2>Focused</h2>
      <p>Research shows that exercise and movement increase focus and attention spans</p>
    </div>
  )
}

export default subHeader; 