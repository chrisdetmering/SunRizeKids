import React from 'react'; 
import classes from './Strip.module.css';
import Content from '../../Contents/Contents';

const strip = (props) => { 
  let StripStyle = props.bg % 2 === 0 ? 
    classes.StripOne : classes.StripTwo


  return(<div className={StripStyle}>
    <h1>{props.header}</h1>
    <Content type={props.type}/>
    </div>
  )
}

export default strip; 