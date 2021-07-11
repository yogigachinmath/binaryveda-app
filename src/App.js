import Navbar from './views/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './views/SignUp';
import Login from './views/Login';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className={classes.container}>
          <Switch>
            <Route path="/sign_up">
              <SignIn />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
