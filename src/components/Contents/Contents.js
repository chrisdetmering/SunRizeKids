import React from 'react'; 
import classes from './Contents.module.css';
import List from './ContentType/List/List';
import Paragraph from './ContentType/Paragraph/Paragraph';
import SubHeader from './ContentType/SubHeader/SubHeader';
import SignUp from './ContentType/SignUp/SignUp';

const content = (props) => { 
   let content = null; 

   switch(props.type) { 
      case ('content-1'):
       content = (<div className={classes.Content}>  
         <List />
       </div>)  
       break;
      case ('content-2'):
       content = (<div className={classes.Content}>
         <Paragraph />
       </div>)
       break;
      case ('content-3'):
       content = (<div className={classes.Content}>
         <SignUp />
       </div>)
       break;
      case ('content-4'):
       content = (<div className={classes.Content}>
         <SubHeader />
       </div>)
       break;
       default: 
        content = null; 
   }

   return content; 
}

export default content; 