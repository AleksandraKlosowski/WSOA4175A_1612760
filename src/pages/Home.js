import React, { Component } from 'react';
import "../styles/Home.css";
import HomepageBanner from '../assets/HomepageBanner.jpg';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home" style={{backgroundImage: `url(${HomepageBanner})` }}>
          <div className="headerContainer">
              <h1>Klosowski Designs</h1>
              <h2>Support Our Artists Today</h2>
              <p>Home of Beautiful Photography
              </p>
              <Link to="/menu">
                <button>SUPPORT</button>
              </Link>  
          </div>
      </div>
    )
  }
}
