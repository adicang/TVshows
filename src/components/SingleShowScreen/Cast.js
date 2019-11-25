import React, { Component } from "react";
import { connect } from "react-redux";

import { showCastEndPoint } from "../../helpers/createEndPoints";
import CastItem from "./CastItem";

import { Row } from "react-bootstrap";
import "./index.css";
import Fade from "react-reveal/Fade";

class Cast extends Component {
  constructor() {
    super();
    this.state = {
      castData: null
    };
  }

  componentDidMount() {
    let castResult = fetch(showCastEndPoint(this.props.currShow.showId))
      .then(res => res.json())
      .then(data => this.displayCast(data));
  }

  displayCast(data) {
    let castObjects = data.map(this.returnCastObject);
    this.setState({
      castData: castObjects
    });
  }

  returnCastObject(data) {
    return {
      key: data.character.id,
      characterName: data.character.name,
      personName: data.person.name,
      characterImg: data.character.image ? data.character.image.medium : null,
      personImg: data.person.image ? data.person.image.medium : null,
      personBirthday: data.person.birthday
    };
  }

  render() {
    return (
      <div className="show-cards-container">
        <Row>
          <h1 className="cast-title">Show Cast</h1>
        </Row>

        {this.state.castData ? (
          <Row>
            {this.state.castData.map(cast => (
              <CastItem
                key={cast.key}
                characterName={cast.characterName}
                personName={cast.personName}
                characterImg={cast.characterImg}
                personImg={cast.personImg}
                id={cast.key}
                personBirthday={cast.personBirthday}
              />
            ))}
          </Row>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currShow: state.currShow
  };
}

export default connect(mapStateToProps, null)(Cast);
