import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    backgroundColor: '#f24a4f',
    borderRadius: '10px',
    width: '420px',
    height: '54px',
    marginTop: '1rem',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#f24a4f',
    }
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  message: {
      color: '#908E8E',
      fontSize: '14px',
      letterSpacing: '-0.1px',
      lineHeight: '21px',
      textAlign: 'center',
  },
  circle: {
    backgroundColor: '#C6D8D3',
    borderRadius: '100%',
    width: '73px',
    height: '73px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkIcon: {
    color: 'white',
  }
});


function Home() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.messageContainer}>
        <div className={classes.circle}><CheckIcon className={classes.checkIcon} /></div>
        <h1>Thank you!</h1>
        <p className={classes.message}>We sent an email to catherine.shaw@gmail.com <br></br>
          Click confirmation link in the email to verify your account</p>
        <Button className={classes.submit}>Open Email App & Confirm</Button>
      </div>
    </div>
  );
}

export default Home;
