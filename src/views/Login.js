import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';
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
    marginTop: '1rem'
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
  recoverPassword: {
    color: '#EB5E55',
    fontSize: '14px',
    letterSpacing: '-0.1px',
    lineHeight: '21px',
    textAlign: 'left',
    textDecoration: 'none'
  },

});

function Login() {
  const classes = useStyles();
  const styles = Styles();
  let history = useHistory();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login?email=${email}&password=${password}`);
      if (response.status >= 400 && response.status < 600) {
        const message = await response.text();
        throw new Error(message);
      }
      else {
        history.push('/');
      }
    } catch (err) {
      setErrorMessage([err.message]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Sign in to get started</h1>
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
          <div className={classes.InputWrapper}>
            <label htmlFor="password" className={classes.InputLabel}>
              Password
            </label>
            <input id="password" className={classes.Input} type="password" />
            <LockIcon className={classes.emailIcon} />
          </div>
          <div className={classes.TwoInputWrapper}>
            <div>
              <input id="terms" className={classes.terms} type="checkbox" />
              <label htmlFor="terms" className={classes.termsLabel}>
                Remember me
              </label>
            </div>
            <div>
              <a href='/#' className={classes.recoverPassword}>Recover password</a>
            </div>
          </div>
          <Button type="submit" className={styles.submitButton}>
            Sign In
          </Button>
        </form>
      </div>
      <AlertBar errorMessage={errorMessage} ></AlertBar>
    </div>
  )
}

export default Login
