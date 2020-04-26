import React from 'react'; 
import classes from './Button.module.css';
import AppleLogo from '../../assets/apple_logo.png';
import GoogleLogo from '../../assets/google_logo.png';

const button = (props) => { 
  let ButtonStyle = null
  let ButtonContent = null
  
  switch (props.buttonType) { 
    case ('GooglePlay'):
      ButtonStyle = classes.DownloadAppBtn;
      ButtonContent = <img src={GoogleLogo} alt="Google Logo" />
      break;
    case ('AppleStore'):
      ButtonStyle = classes.DownloadAppBtn;
      ButtonContent = <img src={AppleLogo} alt="Apple Logo"/>
      break;
    case ('SignUp'):
      ButtonStyle = classes.Button 
      ButtonContent = <p>Sign Up!</p>
      break;
    case ('Contact'):
      ButtonStyle = classes.Button 
      ButtonContent = 'Send';
      break;
    default: 
    ButtonStyle = null
  }

  const handleClick = (event) => { 
    window.open(props.href, '_blank')
  }

  return( 
    <div className={ButtonStyle} onClick={props.click ? props.click : handleClick}>
        {ButtonContent}
    </div>
  )
}

export default button