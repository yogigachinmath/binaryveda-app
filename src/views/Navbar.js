import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {},
  rightNavbar: {
    borderRadius: '10px',
    backgroundColor: '#f7f6f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '116px',
    height: '44px',
    color:  '#908E8E',
    fontSize: '14px',
    letterSpacing: '-0.1px',
    lineHeight: '21px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#f7f6f6',
    },
  },
});

function Navbar() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>
        <Logo />
      </div>
      {location.pathname === '/sign_up' && (
        <div className={classes.rightNavbar}>
          <Link to="/login">
            <Button className={classes.button}>Sign In</Button>
          </Link>
        </div>
      )}
      {location.pathname === '/login' && (
        <div className={classes.rightNavbar}>
          <Link to="/sign_up">
            <Button className={classes.button}>Sign Up</Button>
          </Link>
        </div>
      )}
       {location.pathname === '/' && (
        <div className={classes.rightNavbar}>
          <Link to="/sign_up">
            <Button className={classes.button}>Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
