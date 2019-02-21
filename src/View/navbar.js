import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './style.css';
import { Button } from '@material-ui/core';

const styles = {
  Toolbar:{
    fontFamily: 'Poppins',
    marginLeft: 'auto', 
  },
  Typography:{
    margin:'10px',
    fontSize: '15px',
    marginRight:'30px',
    color: 'white',
  },
  // grow:{
  //   marginLeft: 'auto'
  // },
  button:{
    backgroundColor:'white',
    borderRadius:'5px'
  },
}
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet"></link>
        <AppBar position="static">
          <Toolbar style={styles.Toolbar}>
            <Link to="/" className="under">
            <Typography style={styles.Typography}>
              <p>Home</p>
            </Typography>
            </Link>
            <Link to="/" className="under">
            <Typography style={styles.Typography}>
              <p>Timeline</p>
            </Typography>
            </Link>
            <Link to="/login" className="under" style={styles.grow}>
            <Button style={styles.button}>
              Login
            </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
