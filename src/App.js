import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './View/navbar';
import Landing from './View/Landing';
import SignIn from './View/SignIn';
import Formisi from './Component/Formisi'
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={SignIn}/>
          <Route path="/daftar" component={Formisi}/>
        </Switch>
      </div>
    );
  }
}

export default App;
