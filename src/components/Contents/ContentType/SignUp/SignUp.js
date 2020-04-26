import React from 'react';
import classes from './SignUp.module.css';
import phonePic from '../../../../assets/app_photo.png';
import Button from '../../../Button/Button';

const signUp = () => { 
  const hrefGooglePlay = "https://play.google.com/store/apps/details?id=com.wodify.prod.WodifyRise&hl=en_US"
  const GooglePlay = 'GooglePlay';
  const hrefAppleStore = "https://apps.apple.com/us/app/wodify-rise/id1327914572";
  const AppleStore = 'AppleStore';
  const hrefSunRizeKids = "https://app.wodifyrise.com/Event/Event.aspx?u=sunrizekidsfitness";
  const KidsRize = 'KidsRize';

  return( 
    <div className={classes.SignUpContainer}>
      <div className={classes.SignUp}>
        <div className={classes.Card}>
          <div className={classes.Num}>#1</div>
            <p style={{margin: '10px'}}>Download the Wodify Rize App!</p>
            <div className={classes.btnContainer}>
            <Button 
              href={hrefGooglePlay}
              buttonType={GooglePlay}/>   
            <Button
              href={hrefAppleStore}
              buttonType={AppleStore}/> 
            </div>
        </div>


          <div className={classes.Card}>
          <div className={classes.Num}>#2</div>
            <p style={{margin: '10px'}}>Register For KidsRize </p>
        
          <div className={classes.btnContainer}><Button
              href={hrefSunRizeKids}
              buttonType={KidsRize} /></div>
          </div>


        </div>
      <div className={classes.PhonePicContainer}>
        <img src={phonePic}  alt='SunRize Kids on Wodify App'/>
      </div>
    </div>
  )
}

export default signUp; 