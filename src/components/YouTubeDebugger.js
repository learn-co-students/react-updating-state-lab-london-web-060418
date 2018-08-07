// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings:
      {
        bitrate: 8,
        video:
        {
          resolution: '1080p'
        }
      }
    }; //end of state
  }

  changeBitrate = () => {
    this.setState({ settings:Object.assign({}, this.state.settings, {bitrate:12}) })
  }

  changeResolution = () => {

    let newVideo = Object.assign({}, ...this.state.settings.video, {
      resolution: '720p'
    });

    this.setState({
      settings:Object.assign({}, this.state.settings, {video:newVideo}),
    });

  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={() => this.changeBitrate()}>bitrate</button>
        <button className="resolution" onClick={() => this.changeResolution()}>resolution</button>
      </div>
    )
  }

} //eoc
