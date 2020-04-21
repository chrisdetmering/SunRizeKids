import React from 'react'; 
import classes from './SubHeader.module.css';

const subHeader = () => { 

  return( 
    <div className={classes.SubHeader}>
      <h2>Inspired</h2>
      <p>We use stories of professional athletes, friendly
      Competition and a community of peers to keep kids motivated!</p>
      <h2>Active</h2>
      <p>Our goal is to help your kids stay active during this very in-active
      time with daily workouts and outdoor play activities.</p>
      <h2>Focused</h2>
      <p>Research shows that both kids and adults who start their day with morning 
      exercise or movement routine are more focused and have increased attention 
      spans throughout the day.</p>
    </div>
  )
}

export default subHeader; 