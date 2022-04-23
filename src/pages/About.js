import React, { Component } from 'react';
import AboutImage from '../assets/img8.jpg';
import "../styles/About.css";
import {WireframeList} from '../helpers/WireframeList';
import WireframeItem from '../components/WireframeItem';


export default class About extends Component {
  render() {
    return (
      <div className='allcontent'>
      <div className="about">
          <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})` }}></div>
          <div className='aboutTop'>
          <h1>About Us</h1>
          </div>
          <div className="aboutBottom">
              <p>We are a South African company established in 2022 that recognizes and supports digital artists through the
                  distrubution of large framed prints.
                  The digital Industry is incredibly diluted and our aim is to 
                  distribute and provide the much needed attention to young and talented artists. Categories 
                  range from Photography as various other forms of Digital Artworks such as illustrations, lino-cut etc.
              </p>
              <sub>Our website is currently under renovation; below we have provided some interesting upgrades we are hoping to implement soon.</sub>
          </div>
      </div>
      <div className='wireframe'>
      <div className="wireframeList">
            {WireframeList.map((wireframeItem, value) => {
                return(
                    <WireframeItem value ={value} name ={wireframeItem.name} price ={wireframeItem.price} image ={wireframeItem.image}/>
                )
            })}
          </div>
          </div>
      </div> 
    )
  }
}
