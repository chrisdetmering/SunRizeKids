import React from 'react'; 
import classes from './Button.module.css';

const button = (props) => { 
  let ButtonStyle = null
  let ButtonContent = null
  
  switch (props.buttonType) { 
    case ('Landing'): 
      ButtonStyle = classes.Button
      ButtonContent = (<p>Join Challenge Now!</p>)  
      break; 
    case ('GooglePlay'):
      ButtonStyle = [classes.DownloadAppBtn]
      ButtonStyle.push(classes.BgGooglePlay);
      ButtonStyle =  ButtonStyle.join(" ");
      break;
    case ('AppleStore'):
      ButtonStyle = [classes.DownloadAppBtn]
      ButtonStyle.push(classes.BgAppStore);
      ButtonStyle = ButtonStyle.join(" ");
      break;
    case ('KidsRize'):
      ButtonStyle = classes.Button;
      ButtonContent = 'Register Here!'
      break;
    case ('Contact'):
      ButtonStyle = classes.Button + ' ' + classes.Submit
      ButtonContent = 'Send';
      break;
    default: 
    ButtonStyle = null
  }

  const handleClick = (event) => { 
    window.open(props.href, '_blank')
  }

  return( 
    <div className={ButtonStyle} onClick={props.click? props.click : handleClick}>
        {ButtonContent}
    </div>
  )
}

export default button