import React from 'react'; 
import classes from './List.module.css';
import kid from '../../../../assets/father_kid.png';
import calender from '../../../../assets/calender.png';
import healthy from '../../../../assets/healthy_eating.png';
import score from '../../../../assets/score_card.png'; 

const list = () =>( 
  <div className={classes.List}>
    <div className={classes.Container}>
      <p>A Fitness Program Designed just for Kids </p>
      <img src={kid} alt="father and kid" />
    </div>
    <div className={classes.Container}>
      <p>With Daily and Weekly Challenges</p>
      <img src={calender} alt="A calender" />
    </div>
    <div className={classes.Container}>
      <p>Designed Around Building Healthy Habits in Fitness and Nutrition</p>
      <img src={healthy} alt="Healthy Food" />
    </div>
    <div className={classes.Container}>
      <p>Scores are Tracked to Provide a Dose of Healthy Competition</p>
      <img src={score} alt="A score card" />
    </div>

    
    
    
  </div>
)

export default list; 