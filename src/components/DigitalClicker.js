import React from 'react';

class DigitalClicker extends React.Component {

  state={
    timesClicked: 0
  }

  increaseCount = () => {
    this.setState({
      timesClicked: this.state.timesClicked +1 
    })
  }

  render() {
    return (
      <button onClick={this.increaseCount}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker;
