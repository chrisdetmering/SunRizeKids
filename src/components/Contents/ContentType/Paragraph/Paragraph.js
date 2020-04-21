import React from 'react'; 
import classes from './Paragraph.module.css';
import Icons from './Icons/Icons';
const paragraph = (props) => { 
  const leftIcons = 'leftIcons';
  const rightIcons = 'rightIcons';

  return (

    <div className={classes.ParagraphStyles}>
      <div className={classes.IconsContainer}> 
        <Icons left={leftIcons}/>
      </div>
      <div className={classes.MainContent}>
        <p>Each child creates an account with WodifyRise (with some help from a parent). 
          For 3 weeks(starting on April 12) they will get daily tasks to complete, 
          which the get points for in the App, Like: </p>

        <ul className={classes.NoListStyle}>
          <li>Play outside for 30 minutes</li>
          <li>Drink 20oz of water</li>
          <li>Attend a live Crossfit Kids Zoom class</li>
          <li>Complete your schoolwork</li>
        </ul>

        <p>Weekly PDF checklists are also provided to track the completion of goals offline
          Live CrossFit Kids Zoom classes will be hosted twice a week
          Kid Friendly off-line workouts will be posted daily </p>
      </div>
      <div className={classes.IconsContainer}> 
        <Icons right={rightIcons}/>
      </div>
    </div>
  )
}

export default paragraph;