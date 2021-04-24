import React from "react";

var socialMedia = {
  twitter: "https://twitter.com/gabnattz",
  instagram: "https://www.instagram.com/gabnattz/",
  github: "https://github.com/gabrielBitts",
  twitch: "https://www.twitch.tv/gabnattz",
  linkedIn: "https://www.linkedin.com/in/gabriellopesn/",
};

export class Medias extends React.Component {
  render() {
    return (
      <div>
        <div className="media_info">Redes Sociais</div>
        <div className="grid_body">
          <div className="medias_container">
            <Cards
              filePath="/github.png"
              alt="Imagem 1. Laboratório Github"
              media={socialMedia["github"]}
            />
            <Cards
              filePath="/linkedin.png"
              alt="Imagem 2. LinkedIn"
              media={socialMedia["linkedIn"]}
            />
            <Cards
              filePath="/twitch.png"
              alt="Imagem 3. Twitch"
              media={socialMedia["twitch"]}
            />
            <Cards
              filePath="/twitter.png"
              alt="Imagem 4. Twitter"
              media={socialMedia["twitter"]}
            />
            <Cards
              filePath="/instagram.png"
              alt="Imagem 2. Instagram"
              media={socialMedia["instagram"]}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Cards extends React.Component {
  render() {
    return (
      <div className="card_box">
        <div className="social_cards">
          <div className="media_card">
            <a href={this.props.media}>
              <img
                className="card_image"
                src={this.props.filePath}
                alt={this.props.alt}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Medias;
