import React, { Component } from 'react';

export default class ColorSelector extends Component {

// added onclick event to each swatch which triggers function cb that sets the new color
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const cb = () => { this.props.setSelectedColor(str) }
      return <div key={idx} onClick={cb} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )


  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
