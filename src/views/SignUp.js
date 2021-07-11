import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AlertBar from '../components/AlertBar';
import { Styles } from "../styles/styles";

const useStyles = makeStyles({
  container: {
    flexDirection: 'column',
  },
  InputWrapper: {
    position: 'relative',
    marginTop: '1rem',
  },
  Input: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #EDE8E9',
    borderRadius: '0.5rem',
    width: '26.25rem',
    height: '4.5rem',
    paddingLeft: '1rem',
    paddingTop: '0.2rem',
    fontWeight: 'bold',
  },
  InputLabel: {
    position: 'absolute',
    top: '0.5rem',
    left: '1rem',
    color: '#908E8E',
    fontFamily: 'Inter',
    fontSize: '0.8rem',
    letterSpacing: '-0.1px',
    lineHeight: '1.1rem',
    textAlign: 'left',
  },
  emailIcon: {
    position: 'absolute',
    right: '1rem',
    top: '2rem',
  },
  TwoInputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #EDE8E9',
    borderRadius: '0.5rem',
    width: '12rem',
    height: '4.5rem',
    paddingLeft: '1rem',
    paddingTop: '0.2rem',
    fontWeight: 'bold',
  },
  terms: {
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    marginRight: '1rem',
    verticalAlign: 'middle',
  },
  termsLabel: {
    verticalAlign: 'middle',
  },
});

function SignUp() {
  const styles = Styles();
  const classes = useStyles();
  let history = useHistory();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target[0].value;
    const firstName = e.target[1].value;
    const lastName = e.target[2].value;
    const password = e.target[3].value;
    const confirmPassword = e.target[4].value;
    const data = {email, firstName, lastName, password, confirmPassword};
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/sign_up`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
        body: JSON.stringify(data),
      });
      if (response.status >= 400 && response.status < 600) {
        const message = await response.text();
        throw new Error(message);
      }
      else {
        history.push('/login');
      }
    } catch (err) {
      setErrorMessage([err.message]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Tell us about yourself</h1>
        <p className={styles.paragraph}>Enter your details below</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.InputWrapper}>
            <label htmlFor="email" className={classes.InputLabel}>
              Email
            </label>
            <input
              id="email"
              className={classes.Input}
              type="email"
            />
            <EmailIcon className={classes.emailIcon} />
          </div>
          <div className={classes.TwoInputWrapper}>
            <div className={classes.InputWrapper}>
              <label htmlFor="firstName" className={classes.InputLabel}>
                First Name
              </label>
              <input id="firstName" className={classes.name} type="text" />
              <PersonIcon className={classes.emailIcon} />
            </div>
            <div className={classes.InputWrapper}>
              <label htmlFor="lastName" className={classes.InputLabel}>
                Last Name
              </label>
              <input id="lastName" className={classes.name} type="text" />
              <PersonIcon className={classes.emailIcon} />
            </div>
          </div>
          <div className={classes.InputWrapper}>
            <label htmlFor="password" className={classes.InputLabel}>
              Password
            </label>
            <input id="password" className={classes.Input} type="password" />
            <LockIcon className={classes.emailIcon} />
          </div>
          <div className={classes.InputWrapper}>
            <label htmlFor="confirmPassword" className={classes.InputLabel}>
              Confirm password
            </label>
            <input id="confirmPassword" className={classes.Input} type="password" />
            <LockIcon className={classes.emailIcon} />
          </div>
          <div className={classes.InputWrapper}>
            <input id="terms" className={classes.terms} type="checkbox" />
            <label htmlFor="terms" className={classes.termsLabel}>
              I agree with terms & conditions
            </label>
          </div>
          <Button type="submit" className={styles.submitButton}>
            Continue
          </Button>
        </form>
      </div>
      <AlertBar errorMessage={errorMessage} ></AlertBar>
    </div>
  )
}

export default SignUp
