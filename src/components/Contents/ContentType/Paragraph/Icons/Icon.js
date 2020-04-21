import React from 'react';
import classes from './Icon.module.css';

const icon = (props) => {
  let BackgroundStyle = [classes.Icon];
  BackgroundStyle.push(classes[props.img]);
  BackgroundStyle = BackgroundStyle.join(" ");

  return (
    <div>
      <div className={BackgroundStyle}></div>
      <div className={classes.Text}>{props.text}</div>
    </div>
  )

}

export default icon; 