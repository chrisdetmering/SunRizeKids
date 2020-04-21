import React from 'react'; 
import Icon from './Icon';

const icons = (props) => { 

  const left = [
    <Icon key={'SchoolWork'} img={'SchoolWork'} text={'School Work'}/>, 
    <Icon key={'Zoom'} img={'Zoom'} text={'Zoom Classes'} />, 
    <Icon key={'Water'} img={'Water'} text={'Drink Water!'}/>, 
  ]

  const right = [
    <Icon key={'Workouts'} img={'Workouts'} text={'Daily Workouts'}/>, 
    <Icon key={'Nutrition'} img={'Nutrition'} text={'Nutrition'}/>, 
    <Icon key={'Outside'} img={'Outside'} text={'Play Outside'}/>, 
  ]
  
  return( 
    props.left === 'leftIcons' ? left : right 
  )

}

export default icons; 