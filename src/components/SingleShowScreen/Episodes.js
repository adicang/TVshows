import React, { Component } from "react";
import { connect } from "react-redux";

import { getSeasonsEndPoint } from "../../helpers/createEndPoints";
import SeasonItem from "./SeasonItem";

import { Row, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./index.css";

class Cast extends Component {
  constructor() {
    super();
    this.state = {
      seasons: null
    };
  }

  componentDidMount() {
    let seasonsResult = fetch(getSeasonsEndPoint(this.props.currShow.showId))
      .then(res => res.json())
      .then(data => this.displaySeasons(data));
  }

  displaySeasons(data) {
    let seasonsObjects = data.map(this.returnSeasonObject);
    this.setState({
      seasons: seasonsObjects
    });
  }

  returnSeasonObject(data) {
    return {
      key: data.id,
      seasonNumber: data.number,
      numOfEpisodes: data.episodeOrder,
      Episodes: []
    };
  }

  render() {
    return (
      <div className="show-cards-container" id="episodes">
        <Row>
          <h1 className="episodes-title">Episodes</h1>
        </Row>
        {this.state.seasons ? (
          <Container>
            {this.state.seasons.map(season => (
              <SeasonItem
                key={season.key}
                seasonNumber={season.seasonNumber}
                numOfEpisodes={season.numOfEpisodes}
              />
            ))}
          </Container>
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
