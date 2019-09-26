import React, { Component } from 'react';

export default class Cell extends Component {

// assign current state to current color?
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

// method triggered from event listener
// assigning newColor from the props passed down
// set new state of color to the new color
  handleClick = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
  }

  // added onClick event to each cell
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
