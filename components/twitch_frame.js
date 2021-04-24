import React from "react";

export class Twitch extends React.Component {
  render() {
    return (
      <div id="iframe">
        <div className="twitch_container">
          <div className="twitch_frame">
            <iframe
              className="iframe"
              src="https://player.twitch.tv/?channel=gabnattz&parent=localhost&parent=gabnattz.com.br&allowfullscreen=false"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Twitch;
