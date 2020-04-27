import React from 'react'; 
import classes from './Landing.module.css';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const landing = () => { 
  const SunrizeKidsSignUp = "https://app.wodifyrise.com/Event/Event.aspx?u=sunrizekidsfitness"
  const Landing = 'Landing';
  
  return( 
    <div className={classes.Landing}>
      <div className={classes.LandingBg}>
       <img src={logo} alt='SunRize Kids logo'/>
      </div>

    
        <Button 
          buttonType={Landing}
          href={SunrizeKidsSignUp}/>
    </div>
  )
}

export default landing; 