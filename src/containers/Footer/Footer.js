import React from 'react'; 
import classes from './Footer.module.css';
import Button from '../../components/Button/Button';
import emailjs from 'emailjs-com';

class Footer extends React.Component { 
  state = {
    user_name: "", 
    user_email: "", 
    message: "", 
    contact_number: Math.random() * 100000
  }

  handleChange = (event) => { 
    let key = event.target.name;
    let value = event.target.value; 

    this.setState({[key]: value})
  }

  handleClick = () => { 
    emailjs.init("user_YJ0zhFsZUexPPbQe5QN4x");

    emailjs.send('gmail', 'contact_form', this.state)
      .then((response) => {
        window.alert('Email Sent!')
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ user_name: "", user_email: "", message: "", contact_number: Math.random() * 100000})
      }, function (error) {
        window.alert('Email Failed!')
        console.log('FAILED...', error);
      });
   
  }
  
  render() { 
    return( 
      <div className={classes.Footer}>
        <h1 className={classes.Header}>Have A Question?</h1>
          <div className={classes.InputArea}> 

            <div className={classes.Container}>
              
              <div className={classes.InputContainer}>
                <p>Name</p>
                <input 
                  className={classes.Input}
                  name='user_name'
                  onChange={this.handleChange}
                  value={this.state.user_name}  
                  type="text"/>
              </div>
              <div className={classes.InputContainer}>
                <p>Email</p>
                <input 
                  className={classes.Input}
                  name='user_email'
                  onChange={this.handleChange}
                  value={this.state.user_email}   
                  type="text" />
              </div>
            </div>

            <div className={classes.Message}>
              <p>Message</p>
              <textarea 
                className={classes.Message}
                name='message'
                onChange={this.handleChange}
                 value={this.state.message}  >
              </textarea>
            </div>
            <Button 
            buttonType={'Contact'}
            click={this.handleClick}/>
          </div>
      </div>
    )
  }
}

export default Footer