import React, { Component } from 'react'

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
