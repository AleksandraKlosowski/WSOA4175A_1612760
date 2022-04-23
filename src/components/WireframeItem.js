import React, { Component } from 'react';

export default class WireframeItem extends Component {
  render() {
    return (
      <div className="wireframeItem">
          <div style={{backgroundImage: `url(${this.props.image})`}}></div>
      </div>
    )
  }
}
