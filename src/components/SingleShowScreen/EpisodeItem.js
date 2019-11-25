import React from "react";

import stripHtml from "string-strip-html";
import icon from "../../assets/logo192.png";
import { Col } from "react-bootstrap";
import "./index.css";

class EpisodeItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      hover: false
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  stripHtmlTagsFromString(summary) {
    if (summary) {
      return stripHtml(summary);
    }
  }

  episodeNumberHelper(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  render() {
    let divEpisodeStyle;
    if (this.props.episodeImage) {
      divEpisodeStyle = { backgroundImage: `url(${this.props.episodeImage})` };
    } else {
      divEpisodeStyle = { backgroundImage: `url(${icon})` };
    }

    let episodeHoverStyle, episodeNoHover;
    if (this.state.hover) {
      episodeHoverStyle = { display: "block" };
      episodeNoHover = { display: "none" };
    } else {
      episodeHoverStyle = { display: "none" };
      episodeNoHover = { display: "block" };
    }

    return (
      <Col sm>
        <div
          className="episode-card"
          style={divEpisodeStyle}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <div className="hover-episode-card" style={episodeHoverStyle}>
            <div className="episode-date">
              <p>{this.props.episodeDate}</p>
            </div>

            <div className="episode-description-card">
              <p>
                <span className="episode-name">{this.props.episodeName} </span>
                <span className="episode-summary">
                  {" "}
                  {this.stripHtmlTagsFromString(this.props.episodeSummary)}
                </span>
              </p>
            </div>
          </div>
          <div className="season-and-episode" style={episodeNoHover}>
            <h1 className="season-episode-number">
              <span className="first-letter">S</span>
              {this.episodeNumberHelper(this.props.season)}{" "}
              <span className="first-letter">E</span>
              {this.episodeNumberHelper(this.props.episodeNumber)}
            </h1>
          </div>
        </div>
      </Col>
    );
  }
}

export default EpisodeItem;
