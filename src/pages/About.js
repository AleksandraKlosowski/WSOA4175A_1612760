import React, { Component } from 'react';
import AboutImage from '../assets/img8.jpg';
import "../styles/About.css";
import {WireframeList} from '../helpers/WireframeList';
import {WireframeListTwo} from '../helpers/WireframeListTwo';
import WireframeItem from '../components/WireframeItem';
import Inspo from '../img/inspo.jpg';
import Web from '../img/web.jpg';
import Web2 from '../img/web2.png';
import Web3 from '../img/web3.png';


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
          <div className='aboutTop'>
          <h1>Preperatory Work - Inspirations </h1>
          <h5>Website Aesthetic</h5>
          </div>
          <div className="aboutBottom2">
              <p>I have chosen to go for a simple and clean aesthetic. I have done this as 
                my website will be displaying other works and advertising my digital art 
                capabilities throughout the page. By having a relatively neutral website, 
                I can display vibrant and creative art that does not contrast and clash 
                with the overall design of the website. Neutral, elegant and quirky websites
                 allow for greater attraction from various individuals. Should I choose to 
                 do a loud and vibrant website, it can be off-putting for more conservative 
                 viewers. Despite being neutral, it is equally engaging for the younger 
                 audience as it is currently trendy.
              </p>
          </div>
          <h5>simple. elegant. classy.</h5>
          <img src={Inspo} alt="inspo" class = "center img1"/>
          <h1>Wireframes</h1>
          <div className='wireframe'>
          <div className="wireframeList">
            {WireframeListTwo.map((wireframeItem, value) => {
                return(
                    <WireframeItem value ={value} name ={wireframeItem.name} price ={wireframeItem.price} image ={wireframeItem.image}/>
                )
            })}
          </div>
          </div>
          <h5>Web Art</h5>
          <div className="aboutBottom2">
              <p>My goal is to create a visual representation of being disconnected.  
                In our technological age, we have become more reliant on technological 
                communicated and become more accustomed to remaining in the comfort of 
                our own home, this has been further promoted by Covid 19.
              </p>
          </div>
          <img src={Web} alt="web" class = "center img2"/>
          <img src={Web2} alt="web2" class = "center img2"/>
          <img src={Web3} alt="web3" class = "center img2"/>
      </div> 

      
    )
  }
}
