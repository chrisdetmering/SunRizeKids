import React from 'react'; 
import classes from './Strip.module.css';
import Content from '../../Contents/Contents';

const strip = (props) => { 
  let StripStyle = props.bg % 2 === 0 ? 
    [classes.Strip, classes.One].join(" ")
    : [classes.Strip, classes.Two].join(" ")

  return(<div className={StripStyle}>
      <div className={classes.Container}>
        <h1>{props.header}</h1>
        <Content type={props.type}/>
      </div>
    </div>
  )
}

export default strip; 