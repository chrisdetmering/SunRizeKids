import React from 'react';
import classes from './SignUp.module.css';
import phonePic from '../../../../assets/app_photo.png';

const signUp = () => { 
  return( 
    <div className={classes.SignUpContainer}>
      <div className={classes.SignUp}>
        <div>
          <p>1. Download the Wodify Rize App!</p>
        </div>
        <div>
          <p>2. Register For KidsRize </p>
        </div>
      </div>
      <div className={classes.PhonePicContainer}>
      <img src={phonePic}  alt='SunRize Kids on Wodify App'/>
      
      </div>
    </div>
  )
}

export default signUp; 