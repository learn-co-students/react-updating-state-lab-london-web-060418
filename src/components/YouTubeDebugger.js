// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor () {
    super()
    this.state = {errors: [],
                  user: null,
                  settings: {
                    bitrate: 8,
                    video: {
                     resolution: '1080p'
                    }
                  }
                }
  }


  changeBitrate=() =>{
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, console.log(this.state));
  }

  changeResolution=() =>{
    this.setState({
      settings: {
        ...this.state.settings,
        video:{
        ...this.state.settings.video,
        resolution: '720p'
        }
      }
    }, console.log(this.state));

  }


  render() {
    return(
    <div>
      <button className="resolution" onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
      <button className="bitrate" onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
    </div>
  )
  }
}
