import React from 'react'; 
import classes from './Landing.module.css';
import Button from '../Button/Button';

const landing = () => { 
  const SunrizeKidsSignUp = "https://app.wodifyrise.com/Event/Event.aspx?u=sunrizekidsfitness"
  const Landing = 'Landing';
  
  return( 
    <div className={classes.Landing}>
      <Button 
        buttonType={Landing}
        href={SunrizeKidsSignUp}/>
    </div>
  )
}

export default landing; 