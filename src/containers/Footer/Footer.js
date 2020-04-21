import React from 'react'; 
import classes from './Footer.module.css';
import Button from '../../components/Button/Button';

class Footer extends React.Component { 
  state = { 
    name: "", 
    email: "", 
    message: ""
  }
  
  handleClick = (event) => { 
    window.alert('Message sent')
  }
  
  render() { 
    return( 
      <div className={classes.Footer}>
        <h1 className={classes.Header}>Have A Question?</h1>
          <div className={classes.InputArea}> 

            <div className={classes.Container}>
              
              <div className={classes.InputContainer}>
                <p>Name</p>
                <input className={classes.Input} type="text"/>
              </div>
              <div className={classes.InputContainer}>
                <p>Email</p>
                <input className={classes.Input} type="text" />
              </div>
            </div>

            <div className={classes.Message}>
              <p>Message</p>
              <textarea className={classes.Message}>
              </textarea>
            </div>

              
         
            <Button 
            buttonType={'Contact'}/>
          </div>
      </div>
    )
  }
}

export default Footer