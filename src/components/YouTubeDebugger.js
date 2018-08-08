import React from 'react';

class YouTubeDebugger extends React.Component {

  state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
  }

  increaseBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  increaseRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.increaseBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.increaseRes}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }

}

export default YouTubeDebugger;
