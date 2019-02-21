import React, { Component } from 'react'
import meadow from '../Img/meadow.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="first" class="landing" style={{ backgroundImage: 'url(' + meadow + ')' }}>
          <div class="overlay">
            <h1>PK2MABA FILKOM</h1>
            <p>Deskripsi contoh</p>
            <Link class=" button" to="#second">
              <Button variant="contained" size="large" color="secondary">Daftar</Button>
            </Link>
            <Link class=" button" to="/login">
              <Button variant="contained" size="large" color="secondary">Login</Button>
            </Link>
          </div>
        </section >

        <CardHeader
          title="PK2 TIMELINE"
          subheader="September 14, 2019"
        />

        <section id="second" class="landing timeline" style={{ backgroundImage: 'url(' + meadow + ')' }}>
          <div class="overlay">
            <p>PK2MABA Hari 1</p>
          </div >
        </section >
        <section id="second" class="landing timeline" style={{ backgroundImage: 'url(' + meadow + ')' }}>
          <div class="overlay">
            <p>PK2MABA Hari 2</p>
          </div >
        </section >
        <section id="second" class="landing timeline" style={{ backgroundImage: 'url(' + meadow + ')' }}>
          <div class="overlay">
            <h1>Hayo</h1>
            <p>Startup Academy 2019</p>
          </div >
        </section >
      </React.Fragment>
    );
  }
};