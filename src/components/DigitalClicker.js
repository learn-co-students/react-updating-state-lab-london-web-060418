// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state  = {
      timesClicked: 0
    }
  }

  increment = () => {
    console.log(this.state.timesClicked)
    let newTime = ++this.state.timesClicked
    this.setState({
      timesClicked : newTime
    })
  }

  render() {
    return <button onClick={this.increment}>{this.state.timesClicked}</button>
  }
}
