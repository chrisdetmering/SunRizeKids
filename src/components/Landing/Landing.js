import React from 'react'; 
import classes from './Landing.module.css';
import Button from '../Button/Button';

const landing = () => { 
  const SunrizeKidsSignUp = "https://app.wodifyrise.com/Event/Event.aspx?u=sunrizekidsfitness"
  const Landing = 'Landing';
  
  return( 
    <div className={classes.Landing}>
      <div className={classes.Content}>
        <h1>SunRize Kids</h1>
        <p>Keeping kids focused While stuck at home</p>
        <Button 
          buttonType={Landing}
          href={SunrizeKidsSignUp}/>
      </div>
    </div>
  )
}

export default landing; 