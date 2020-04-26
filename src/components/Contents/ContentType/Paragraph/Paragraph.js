import React from 'react'; 
import classes from './Paragraph.module.css';
import exercise from '../../../../assets/exercise.png';
import water from '../../../../assets/water.png';
import tree from '../../../../assets/tree.png';
import hike from '../../../../assets/hike.png';
import reading from '../../../../assets/reading.png';
const paragraph = (props) => { 


  return (

    <div className={classes.ParagraphStyles}>
     
      <div className={classes.MainContent}>
        <p>  For 3 weeks each child will get daily tasks to complete which they get points for to track their progress. 
          There is a leaderboard keeping track of these point. At the end of the three weeks, the kid with the most points, wins! </p>
      </div>
      <div style={{width: '100%'}}>
        <h2>Tasks Like</h2>
        <div className={classes.IconsContainer}>
          <div className={classes.Icons}> 
            <img src={exercise} alt='A person running'/>
            <p>Exercise for 15 minutes!</p>
          </div>
          <div className={classes.Icons}>
            <img src={water} alt='Water' />
            <p>Drink 20oz of Water!</p>
            
          </div>
          <div className={classes.Icons}>
            <img src={hike} alt='A person Hiking' />
            <p>Family Hike</p>
           
          </div>
          <div className={classes.Icons}>
            <img src={tree} alt='A tree' />
            <p>Get Outside!</p>
          </div>
          <div className={classes.Icons}>
            <img src={reading} alt='A person reading' />
            <p>Complete School work</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default paragraph;