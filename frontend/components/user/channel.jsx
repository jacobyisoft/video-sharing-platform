import React, { Component } from "react";

export default class Channel extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.location.pathname.slice(9));
    this.props.fetchUserVideos(this.props.location.pathname.slice(9));
  }

  render() {
    console.log(this.props);
    const { sidebar, username } = this.props;
    const containerWidth = sidebar
      ? { width: "calc(100% - 240px" }
      : { width: "calc(100% - 72px)" };
    if (!username) return null;
    return (
      <div style={containerWidth} className="channel-container">
        <div className="channel-header">
          <div className="channel-label">
            <div className="channel-owner-detail">
              <div className="default-avatar">
                <span>{username[0].toUpperCase()}</span>
              </div>
              <div className="channel-username">{username}</div>
            </div>
          </div>

          <div className="channel-content-selectors">
            <div className="channel-content-selector-video">Videos</div>
          </div>
        </div>
        <div className="channel-content"></div>
      </div>
    );
  }
}
