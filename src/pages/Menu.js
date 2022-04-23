import React, { Component } from 'react'
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
          <div className="menuTitle">
          <h2>Selection</h2>
          </div>
          <h3>Popular This Month</h3>
            <div className='content'>

          </div>
          <div className="menuList">
            {MenuList.map((menuItem, value) => {
                return(
                    <MenuItem value ={value} name ={menuItem.name} price ={menuItem.price} image ={menuItem.image}/>
                )
            })}
          </div>
      </div>
    )
  }
}
