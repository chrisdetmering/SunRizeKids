import React from 'react'; 
import classes from './SubHeader.module.css';
import inspired from '../../../../assets/inspired.png';
import active from '../../../../assets/active.png';
import focused from '../../../../assets/focused.png';

const subHeader = () => { 

  return( 
    <div className={classes.SubHeader}>
      <div className={classes.Card}>
        <h2>Inspired</h2>
          <div className={classes.Icon}>
            <img src={inspired} alt='lightbulb'/>
          </div>
        <p>Goals, challenges, and new content every day keep kids engaged and motivated.</p>
      </div>

      <div className={classes.Card}>
        <h2>Active</h2>
        <div className={classes.Icon}>
          <img src={active} alt='cartwheel' />
        </div>
        <p>Get kids off screens with daily workouts and outdoor challenges.</p>
      </div>

      <div className={classes.Card}>
        <h2>Focused</h2>
        <div className={classes.Icon}>
          <img src={focused} alt='magnifying glass' />
        </div>
        <p>Research shows that exercise and movement increase focus and attention spans.</p>
      </div>
    </div>
  )
}

export default subHeader; 