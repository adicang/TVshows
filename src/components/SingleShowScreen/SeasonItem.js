import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchShow from "../../redux/actions/fetchShow";
import { getEpisodesEndPoint } from "../../helpers/createEndPoints";
import EpisodeItem from "./EpisodeItem";

import icon from "../../assets/logo192.png";
import anonymousImg from "../../assets/anonymous.png";
import { Row } from "react-bootstrap";
import { Grid, Container } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import "./index.css";

class SeasonItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      episodes: null,
      showEpisodes: false
    };

    this.returnEpisodeObject = this.returnEpisodeObject.bind(this);
    this.toggleEpisodes = this.toggleEpisodes.bind(this);
  }

  toggleEpisodes() {
    this.setState({ showEpisodes: !this.state.showEpisodes });
  }

  componentDidMount() {
    let episodedResult = fetch(getEpisodesEndPoint(this.props.currShow.showId))
      .then(res => res.json())
      .then(data => this.displayEpisodes(data._embedded.episodes));
  }

  displayEpisodes(data) {
    let episodesObjects = data.map(this.returnEpisodeObject);
    episodesObjects = episodesObjects.filter(item => !!item);
    this.setState({
      episodes: episodesObjects
    });
  }

  returnEpisodeObject(data) {
    if (data.season === this.props.seasonNumber) {
      return {
        key: data.id,
        season: data.season,
        episodeNumber: data.number,
        episodeName: data.name,
        episodeSummary: data.summary,
        episodeImage: data.image ? data.image.original : null,
        episodeDate: data.airdate
      };
    }
  }

  render() {
    let showEpisodes;
    if (this.state.showEpisodes) {
      showEpisodes = { display: "flex" };
    } else {
      showEpisodes = { display: "none" };
    }

    return (
      <Container>
        <h2 className="season-title" onClick={this.toggleEpisodes}>
          Season {this.props.seasonNumber}
        </h2>
        {this.state.episodes ? (
          <Row style={showEpisodes}>
            <Fade top>
              {this.state.episodes.map(episode => (
                <EpisodeItem
                  key={episode.key}
                  season={episode.season}
                  episodeNumber={episode.episodeNumber}
                  episodeName={episode.episodeName}
                  episodeSummary={episode.episodeSummary}
                  episodeImage={episode.episodeImage}
                  episodeDate={episode.episodeDate}
                />
              ))}
            </Fade>
          </Row>
        ) : null}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currShow: state.currShow
  };
}

export default connect(mapStateToProps, null)(SeasonItem);
