import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.state = {
      color: null
    };
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectColor={this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleColor(color) {
    this.setState({color: color}, () => {
      console.log("Matrix color: " + this.state.color);
    });
  }


  render() {
    return (
      <div id="app">
        <ColorSelector selectColor={this.handleColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
