import React from 'react'; 
import classes from './Paragraph.module.css';
// import Icons from './Icons/Icons';
const paragraph = (props) => { 


  return (

    <div className={classes.ParagraphStyles}>
     
      <div className={classes.MainContent}>
        <p> Each child creates an account with WodifyRise App (with some help from a parent of course!). 
          For 3 weeks they will get daily tasks to complete which they get points for to track their progress.  </p>
      </div>
     
    </div>
  )
}

export default paragraph;