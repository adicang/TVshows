import React from "react";

import anonymousImg from "../../assets/anonymous.png";
import { Col } from "react-bootstrap";
import "./index.css";

class CastItem extends React.Component {
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

  render() {
    let imgStyle;
    if (this.state.hover) {
      if (this.props.personImg) {
        imgStyle = { backgroundImage: `url(${this.props.personImg})` };
      } else {
        imgStyle = { backgroundImage: `url(${anonymousImg})` };
      }
    } else {
      if (this.props.characterImg) {
        imgStyle = { backgroundImage: `url(${this.props.characterImg})` };
      } else {
        imgStyle = { backgroundImage: `url(${anonymousImg})` };
      }
    }

    return (
      <Col sm className="cast-card">
        <div
          className="img-cast-div"
          style={imgStyle}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        ></div>
        <h3 className="person-name">{this.props.personName}</h3>
        <h3 className="character-name">{this.props.characterName}</h3>
      </Col>
    );
  }
}

export default CastItem;
