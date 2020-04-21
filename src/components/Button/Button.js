import React from 'react'; 
import classes from './Button.module.css';

const button = (props) => { 
  let ButtonStyle = null
  let ButtonContent = null

  switch (props.buttonType) { 
    case ('Landing'): 
     ButtonStyle = classes.LandingBtn
     ButtonContent = 'Join Challenge Now!'
     break; 
    default: 
    ButtonStyle = null
  }


  const handleClick = (event) => { 
    window.open(props.href, '_blank')
  }

  return( 
    <div className={ButtonStyle} onClick={handleClick}>
        <p>{ButtonContent}</p>
    </div>
  )
}

export default button